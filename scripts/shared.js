const fs = require('fs-extra');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [{ name: 'env' }, { name: 'dangerouslyBypassVersionCheck', type: Boolean, defaultOption: false }];
const options = commandLineArgs(optionDefinitions);
const { env = '.env' } = options;

function getEnvironmentCdn() {
    return new Promise(async (resolve, reject) => {
        try {
            const userDir = process.cwd();
            // Read the `.env` file in root of repo and return for the value of `PUBLIC_URL`
            const userEnv = await fs.readFile(`${userDir}/.env`, 'utf8');
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
            const userEnv = await fs.readFile(`${userDir}/__temp/${env}`, 'utf8');
            const cdn = userEnv.match(/PUBLIC_URL=.*/)[0];

            await fs.writeFile(`${userDir}/.env`, userEnv.replace(cdn, `${cdn}${version}/`));
            resolve(cdn);
        } catch (e) {
            console.error(e);
            console.error(`=== There was an issue adding the version from the "${env}" file ===`);
            process.exit(1);
        }
    });
}

// Stash files so we don't override anything
async function stashExistingEnvFiles() {
    return new Promise(async (resolve, reject) => {
        const userDir = process.cwd();
        try {
            await fs.ensureDir(`${userDir}/__temp`);
            try {
                await fs.copyFile(`${userDir}/.env`, `${userDir}/__temp/.env`);
            } catch (e) {}
            try {
                await fs.copyFile(`${userDir}/.env.staging`, `${userDir}/__temp/.env.staging`);
            } catch (e) {}

            resolve();
        } catch (e) {
            console.error(e);
            console.error('=== Failed to copy environment files ===');
            process.exit(1);
        }
    });
}

// Replace modified files with stashed files
async function replaceModifiedEnvFiles() {
    return new Promise(async (resolve, reject) => {
        const userDir = process.cwd();
        try {
            await fs.copyFile(`${userDir}/__temp/.env`, `${userDir}/.env`);
        } catch (e) {}
        try {
            await fs.copyFile(`${userDir}/__temp/.env.staging`, `${userDir}/.env.staging`);
        } catch (e) {}

        try {
            await fs.remove(`${userDir}/__temp`);
        } catch (e) {}

        resolve();
    });
}

module.exports = {
    getEnvironmentCdn,
    addVersionToEnvFile,
    stashExistingEnvFiles,
    replaceModifiedEnvFiles,
    options,
};
