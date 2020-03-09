const fs = require('fs-extra');

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
            console.error('Please make sure the `.env` file exists and contains `PUBLIC_URL` path');
            process.exit(1);
        }
    });
}

module.exports = {
    getEnvironmentCdn,
};
