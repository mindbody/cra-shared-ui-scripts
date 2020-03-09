const fs = require('fs-extra');

function getEnvironmentCdn() {
    return new Promise(async (resolve, reject) => {
        try {
            const userDir = process.cwd();
            // Read the `.env` file in root of repo and return for the value of `PUBLIC_URL`
            const userEnv = await fs.readFile(`${userDir}/.env`, 'utf8', (e, data) => {
                console.log(e, data);
                if (e) {
                    throw new Error('Make sure your pipeline creates a .env file with the PUBLIC_URL set');
                }
            });
            const cdn = userEnv
                .match(/PUBLIC_URL=.*/)[0]
                .replace(/PUBLIC_URL=/, '')
                .trim();

            resolve(cdn);
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}

module.exports = {
    getEnvironmentCdn,
};
