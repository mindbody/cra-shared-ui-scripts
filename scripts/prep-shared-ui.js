#!/usr/bin/env node

/**
 * The purpose of this script is to check to see if current version exists in CDN already
 * - If it does exist, this script will error out and cause the build to fail
 * - Otherwise lets build continues
 */

const fetch = require('node-fetch');
const fs = require('fs-extra');
const shared = require('./shared.js');
const { getEnvironmentCdn, addVersionToEnvFile, stashExistingEnvFiles, replaceModifiedEnvFiles } = shared;

try {
    prepSharedUi();
} catch (e) {
    console.error(e);
    process.exit(1);
}

async function prepSharedUi() {
    const canDeploy = await canDeployCurrentVersion();
    await stashExistingEnvFiles();
    // add the version in the env file
    await addVersionToEnvFile();

    if (!canDeploy) {
        await replaceModifiedEnvFiles();
        console.error('It looks like the version already exists. Did you update your version?');
        process.exit(1);
    }

    console.log('Completed confirming version can be deployed');
}

/**
 * Check for version on remote
 * - Kill if found
 * - otherwise continue
 *
 * Setup environment variable. If `.env` file exists
 * - check for `PUBLIC_URL=` and replace it with temp value
 * - Otherwise create it and set `PUBLIC_URL=`
 */
function canDeployCurrentVersion() {
    return new Promise(async (resolve) => {
        const userDir = process.cwd();
        const { version } = await fs.readJson(`${userDir}/package.json`);
        const cdn = await getEnvironmentCdn();

        console.log(`Checking for "${cdn}/${version}/app.js"`);

        const request = await fetch(`${cdn}/${version}/app.js`);
        const response = await request.text();

        resolve(response.trim() === 'Not found');
    });
}
