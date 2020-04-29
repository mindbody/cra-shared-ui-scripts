const fs = require('fs-extra');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [{ name: 'env' }];
const options = commandLineArgs(optionDefinitions);
const { env = '.env' } = options;

function getEnvironmentCdn() {
    return new Promise(async (resolve, reject) => {
        try {
            const userDir = process.cwd();
            // Read the `.env` file in root of repo and return for the value of `PUBLIC_URL`
            const userEnv = await fs.readFile(`${userDir}/${env}`, 'utf8');
            const cdn = userEnv
                .match(/PUBLIC_URL=.*/)[0]
                .replace(/PUBLIC_URL=/, '')
                .trim();

            resolve(cdn);
        } catch (e) {
            console.error(e);
            console.error(`=== Make sure the "${env}" file exists and contains "PUBLIC_URL" path ===`);
            process.exit(1);
        }
    });
}

function addVersionToEnvFile() {
    return new Promise(async (resolve, reject) => {
        try {
            const userDir = process.cwd();
            const { version } = await fs.readJson(`${userDir}/package.json`);
            console.log('add version', version);
            // Read the `.env` file in root of repo and return for the value of `PUBLIC_URL`
            const userEnv = await fs.readFile(`${userDir}/${env}`, 'utf8');
            const cdn = userEnv.match(/PUBLIC_URL=.*/)[0];

            await fs.writeFile(`${userDir}/${env}`, userEnv.replace(cdn, `${cdn}${version}/`));

            resolve(cdn);
        } catch (e) {
            console.error(e);
            console.error(`=== There was an issue adding the version from the "${env}" file ===`);
            process.exit(1);
        }
    });
}

async function removeVersionFromEnvFile() {
    return new Promise(async (resolve, reject) => {
        try {
            const userDir = process.cwd();
            const { version } = await fs.readJson(`${userDir}/package.json`);
            const userEnv = await fs.readFile(`${userDir}/${env}`, 'utf8');
            const cdn = userEnv.match(/PUBLIC_URL=.*/)[0];
            const cdnNoVersion = cdn.replace(`${version}/`, '');

            await fs.writeFile(`${userDir}/${env}`, userEnv.replace(cdn, cdnNoVersion));
            console.log('remove version', version);
        } catch (e) {
            console.error(e);
            console.error(`=== There was an issue removing the version from the "${env}" file ===`);
            process.exit(1);
        }
    });
}

module.exports = {
    getEnvironmentCdn,
    addVersionToEnvFile,
    removeVersionFromEnvFile,
};
