# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.7.0 (2021-06-21)


### Features

* added dangerouslyBypassVersionCheck flag ([9164a71](https://github.com/mindbody/cra-shared-ui-scripts/commit/9164a712e1d2d24cc8135d8515e95b3e58815099))
* added support for custom env file ([8517dde](https://github.com/mindbody/cra-shared-ui-scripts/commit/8517dde267a446d0a302aa187406d3a292c28317))
* initial commit ([2e42dd8](https://github.com/mindbody/cra-shared-ui-scripts/commit/2e42dd8f58934b94e47a9f92140dea4ca5803675))
* stashing enviornment files and overwriting main env file so react builds with correct script and then replacing the modified version after ([db61e6f](https://github.com/mindbody/cra-shared-ui-scripts/commit/db61e6fbf8e0f20fc04279055c4c42cff83b1307))
* updated scripts to deploy single versioned folder and use .env file ([429be8c](https://github.com/mindbody/cra-shared-ui-scripts/commit/429be8ce56dc30d97ac7ac85f2d1dcec13aa2f8e))


### Bug Fixes

* added "command-line-args": "^5.1.1", to dependencies ([4c18b13](https://github.com/mindbody/cra-shared-ui-scripts/commit/4c18b13c3b21c08252c34a1c21426fe09ecf3ecc))
* added error message before exiting ([fdb4003](https://github.com/mindbody/cra-shared-ui-scripts/commit/fdb4003505e457bf4e609aee1096a00d07529453))
* added logging ([0c1d3bb](https://github.com/mindbody/cra-shared-ui-scripts/commit/0c1d3bbad4b046cb54398cb7b64a3b301b961bb0))
* added process.exit to the exit code ([6350681](https://github.com/mindbody/cra-shared-ui-scripts/commit/63506814711ff76c90e9acde8238169d5ab0a71c))
* added variables and resolving promise after copying files ([ee68e4f](https://github.com/mindbody/cra-shared-ui-scripts/commit/ee68e4ff470bd8d04e08b154822b5f24490a0ea6))
* adding version to env file then removing it during prep and finalize steps ([6940a21](https://github.com/mindbody/cra-shared-ui-scripts/commit/6940a214014f4bce761a9bf49268c6c02d425ceb))
* exiting early as promise doesn't handle rejection error ([0734175](https://github.com/mindbody/cra-shared-ui-scripts/commit/0734175601a6bae6033e17008db0875e4432c677))
* handling rejection error if file not found ([957dc4b](https://github.com/mindbody/cra-shared-ui-scripts/commit/957dc4bb029fa9243a92abb9e6bdca70617ba0e9))
* if changelog doesnt exist, exit early ([22a7cf4](https://github.com/mindbody/cra-shared-ui-scripts/commit/22a7cf440c6180b56d063bcc7941d99545e2bd8e))
* logging error message ([c17b07d](https://github.com/mindbody/cra-shared-ui-scripts/commit/c17b07da1cec6002e276e6776c5199485be26676))
* logging error message when it fails ([fe2afdf](https://github.com/mindbody/cra-shared-ui-scripts/commit/fe2afdfb17128fd69bc35258db0e339fd0878520))
* making message stand out more ([6417296](https://github.com/mindbody/cra-shared-ui-scripts/commit/6417296ebd0ace5f64fec95abbca478e3fc688a6))
* moving all reads into try/catch to catch the error and exit early ([28c44f1](https://github.com/mindbody/cra-shared-ui-scripts/commit/28c44f1e73d973c902ab17859e72d0aad54fb117))
* pulling cdn URL from main env file ([9755ac4](https://github.com/mindbody/cra-shared-ui-scripts/commit/9755ac4057b926dafae9e1beaa223d5265a07c33))
* updated dependencies so husky isn't downloaded when being consumed ([0d76d7f](https://github.com/mindbody/cra-shared-ui-scripts/commit/0d76d7f4806a74805caccb86d51c35c689e95275))
* updated to check for status code instead of status text as browsers handle it differently ([730ac5f](https://github.com/mindbody/cra-shared-ui-scripts/commit/730ac5f31dd773d6600fd620dde147a2cefbdab3))
* use the evnironment file correctly ([0da5035](https://github.com/mindbody/cra-shared-ui-scripts/commit/0da5035a53ff39b4a3e08a57fe1897a010486f65))

## 1.6.0 (2021-06-16)


### Features

* added dangerouslyBypassVersionCheck flag ([9164a71](https://github.com/mindbody/cra-shared-ui-scripts/commit/9164a712e1d2d24cc8135d8515e95b3e58815099))
* added support for custom env file ([8517dde](https://github.com/mindbody/cra-shared-ui-scripts/commit/8517dde267a446d0a302aa187406d3a292c28317))
* initial commit ([2e42dd8](https://github.com/mindbody/cra-shared-ui-scripts/commit/2e42dd8f58934b94e47a9f92140dea4ca5803675))
* stashing enviornment files and overwriting main env file so react builds with correct script and then replacing the modified version after ([db61e6f](https://github.com/mindbody/cra-shared-ui-scripts/commit/db61e6fbf8e0f20fc04279055c4c42cff83b1307))
* updated scripts to deploy single versioned folder and use .env file ([429be8c](https://github.com/mindbody/cra-shared-ui-scripts/commit/429be8ce56dc30d97ac7ac85f2d1dcec13aa2f8e))


### Bug Fixes

* added "command-line-args": "^5.1.1", to dependencies ([4c18b13](https://github.com/mindbody/cra-shared-ui-scripts/commit/4c18b13c3b21c08252c34a1c21426fe09ecf3ecc))
* added error message before exiting ([fdb4003](https://github.com/mindbody/cra-shared-ui-scripts/commit/fdb4003505e457bf4e609aee1096a00d07529453))
* added logging ([0c1d3bb](https://github.com/mindbody/cra-shared-ui-scripts/commit/0c1d3bbad4b046cb54398cb7b64a3b301b961bb0))
* added process.exit to the exit code ([6350681](https://github.com/mindbody/cra-shared-ui-scripts/commit/63506814711ff76c90e9acde8238169d5ab0a71c))
* added variables and resolving promise after copying files ([ee68e4f](https://github.com/mindbody/cra-shared-ui-scripts/commit/ee68e4ff470bd8d04e08b154822b5f24490a0ea6))
* adding version to env file then removing it during prep and finalize steps ([6940a21](https://github.com/mindbody/cra-shared-ui-scripts/commit/6940a214014f4bce761a9bf49268c6c02d425ceb))
* exiting early as promise doesn't handle rejection error ([0734175](https://github.com/mindbody/cra-shared-ui-scripts/commit/0734175601a6bae6033e17008db0875e4432c677))
* handling rejection error if file not found ([957dc4b](https://github.com/mindbody/cra-shared-ui-scripts/commit/957dc4bb029fa9243a92abb9e6bdca70617ba0e9))
* if changelog doesnt exist, exit early ([22a7cf4](https://github.com/mindbody/cra-shared-ui-scripts/commit/22a7cf440c6180b56d063bcc7941d99545e2bd8e))
* logging error message ([c17b07d](https://github.com/mindbody/cra-shared-ui-scripts/commit/c17b07da1cec6002e276e6776c5199485be26676))
* logging error message when it fails ([fe2afdf](https://github.com/mindbody/cra-shared-ui-scripts/commit/fe2afdfb17128fd69bc35258db0e339fd0878520))
* making message stand out more ([6417296](https://github.com/mindbody/cra-shared-ui-scripts/commit/6417296ebd0ace5f64fec95abbca478e3fc688a6))
* moving all reads into try/catch to catch the error and exit early ([28c44f1](https://github.com/mindbody/cra-shared-ui-scripts/commit/28c44f1e73d973c902ab17859e72d0aad54fb117))
* pulling cdn URL from main env file ([9755ac4](https://github.com/mindbody/cra-shared-ui-scripts/commit/9755ac4057b926dafae9e1beaa223d5265a07c33))
* updated dependencies so husky isn't downloaded when being consumed ([0d76d7f](https://github.com/mindbody/cra-shared-ui-scripts/commit/0d76d7f4806a74805caccb86d51c35c689e95275))
* updated to check for status code instead of status text as browsers handle it differently ([730ac5f](https://github.com/mindbody/cra-shared-ui-scripts/commit/730ac5f31dd773d6600fd620dde147a2cefbdab3))

### [1.5.2](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.5.1...v1.5.2) (2020-08-05)


### Bug Fixes

* updated to check for status code instead of status text as browsers handle it differently ([730ac5f](https://github.com/mindbody/cra-shared-ui-scripts/commit/730ac5f31dd773d6600fd620dde147a2cefbdab3))

### [1.5.1](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.5.0...v1.5.1) (2020-06-15)


### Bug Fixes

* added "command-line-args": "^5.1.1", to dependencies ([4c18b13](https://github.com/mindbody/cra-shared-ui-scripts/commit/4c18b13c3b21c08252c34a1c21426fe09ecf3ecc))

## [1.5.0](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.3.0...v1.5.0) (2020-06-15)


### Features

* stashing enviornment files and overwriting main env file so react builds with correct script and then replacing the modified version after ([db61e6f](https://github.com/mindbody/cra-shared-ui-scripts/commit/db61e6fbf8e0f20fc04279055c4c42cff83b1307))


### Bug Fixes

* added variables and resolving promise after copying files ([ee68e4f](https://github.com/mindbody/cra-shared-ui-scripts/commit/ee68e4ff470bd8d04e08b154822b5f24490a0ea6))
* pulling cdn URL from main env file ([9755ac4](https://github.com/mindbody/cra-shared-ui-scripts/commit/9755ac4057b926dafae9e1beaa223d5265a07c33))
* updated dependencies so husky isn't downloaded when being consumed ([0d76d7f](https://github.com/mindbody/cra-shared-ui-scripts/commit/0d76d7f4806a74805caccb86d51c35c689e95275))

### [1.4.1](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.4.0...v1.4.1) (2020-05-12)


### Bug Fixes

* pulling cdn URL from main env file ([9755ac4](https://github.com/mindbody/cra-shared-ui-scripts/commit/9755ac4057b926dafae9e1beaa223d5265a07c33))

## [1.4.0](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.2.3...v1.4.0) (2020-05-11)


### Features

* added support for custom env file ([8517dde](https://github.com/mindbody/cra-shared-ui-scripts/commit/8517dde267a446d0a302aa187406d3a292c28317))
* stashing enviornment files and overwriting main env file so react builds with correct script and then replacing the modified version after ([db61e6f](https://github.com/mindbody/cra-shared-ui-scripts/commit/db61e6fbf8e0f20fc04279055c4c42cff83b1307))


### Bug Fixes

* added variables and resolving promise after copying files ([ee68e4f](https://github.com/mindbody/cra-shared-ui-scripts/commit/ee68e4ff470bd8d04e08b154822b5f24490a0ea6))

## [1.3.0](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.0...v1.3.0) (2020-04-29)


### Features

* added support for custom env file ([8517dde](https://github.com/mindbody/cra-shared-ui-scripts/commit/8517dde267a446d0a302aa187406d3a292c28317))


### Bug Fixes

* added error message before exiting ([fdb4003](https://github.com/mindbody/cra-shared-ui-scripts/commit/fdb4003505e457bf4e609aee1096a00d07529453))
* added logging ([0c1d3bb](https://github.com/mindbody/cra-shared-ui-scripts/commit/0c1d3bbad4b046cb54398cb7b64a3b301b961bb0))
* added process.exit to the exit code ([6350681](https://github.com/mindbody/cra-shared-ui-scripts/commit/63506814711ff76c90e9acde8238169d5ab0a71c))
* adding version to env file then removing it during prep and finalize steps ([6940a21](https://github.com/mindbody/cra-shared-ui-scripts/commit/6940a214014f4bce761a9bf49268c6c02d425ceb))
* exiting early as promise doesn't handle rejection error ([0734175](https://github.com/mindbody/cra-shared-ui-scripts/commit/0734175601a6bae6033e17008db0875e4432c677))
* handling rejection error if file not found ([957dc4b](https://github.com/mindbody/cra-shared-ui-scripts/commit/957dc4bb029fa9243a92abb9e6bdca70617ba0e9))
* if changelog doesnt exist, exit early ([22a7cf4](https://github.com/mindbody/cra-shared-ui-scripts/commit/22a7cf440c6180b56d063bcc7941d99545e2bd8e))
* logging error message ([c17b07d](https://github.com/mindbody/cra-shared-ui-scripts/commit/c17b07da1cec6002e276e6776c5199485be26676))
* logging error message when it fails ([fe2afdf](https://github.com/mindbody/cra-shared-ui-scripts/commit/fe2afdfb17128fd69bc35258db0e339fd0878520))
* making message stand out more ([6417296](https://github.com/mindbody/cra-shared-ui-scripts/commit/6417296ebd0ace5f64fec95abbca478e3fc688a6))
* moving all reads into try/catch to catch the error and exit early ([28c44f1](https://github.com/mindbody/cra-shared-ui-scripts/commit/28c44f1e73d973c902ab17859e72d0aad54fb117))

### [1.2.3](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.2.2...v1.2.3) (2020-04-20)

### [1.2.2](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.2.1...v1.2.2) (2020-04-17)


### Bug Fixes

* adding version to env file then removing it during prep and finalize steps ([6940a21](https://github.com/mindbody/cra-shared-ui-scripts/commit/6940a214014f4bce761a9bf49268c6c02d425ceb))

### [1.2.1](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.9...v1.2.1) (2020-04-16)


### Bug Fixes

* exiting early as promise doesn't handle rejection error ([0734175](https://github.com/mindbody/cra-shared-ui-scripts/commit/0734175601a6bae6033e17008db0875e4432c677))

## 1.2.0 (2020-04-07)


### Features

* initial commit ([2e42dd8](https://github.com/mindbody/cra-shared-ui-scripts/commit/2e42dd8f58934b94e47a9f92140dea4ca5803675))
* updated scripts to deploy single versioned folder and use .env file ([429be8c](https://github.com/mindbody/cra-shared-ui-scripts/commit/429be8ce56dc30d97ac7ac85f2d1dcec13aa2f8e))


### Bug Fixes

* added error message before exiting ([fdb4003](https://github.com/mindbody/cra-shared-ui-scripts/commit/fdb4003505e457bf4e609aee1096a00d07529453))
* added logging ([0c1d3bb](https://github.com/mindbody/cra-shared-ui-scripts/commit/0c1d3bbad4b046cb54398cb7b64a3b301b961bb0))
* added process.exit to the exit code ([6350681](https://github.com/mindbody/cra-shared-ui-scripts/commit/63506814711ff76c90e9acde8238169d5ab0a71c))
* handling rejection error if file not found ([957dc4b](https://github.com/mindbody/cra-shared-ui-scripts/commit/957dc4bb029fa9243a92abb9e6bdca70617ba0e9))
* if changelog doesnt exist, exit early ([22a7cf4](https://github.com/mindbody/cra-shared-ui-scripts/commit/22a7cf440c6180b56d063bcc7941d99545e2bd8e))
* logging error message ([c17b07d](https://github.com/mindbody/cra-shared-ui-scripts/commit/c17b07da1cec6002e276e6776c5199485be26676))
* logging error message when it fails ([fe2afdf](https://github.com/mindbody/cra-shared-ui-scripts/commit/fe2afdfb17128fd69bc35258db0e339fd0878520))
* making message stand out more ([6417296](https://github.com/mindbody/cra-shared-ui-scripts/commit/6417296ebd0ace5f64fec95abbca478e3fc688a6))
* moving all reads into try/catch to catch the error and exit early ([28c44f1](https://github.com/mindbody/cra-shared-ui-scripts/commit/28c44f1e73d973c902ab17859e72d0aad54fb117))

### [1.1.9](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.8...v1.1.9) (2020-03-10)


### Bug Fixes

* if changelog doesnt exist, exit early ([22a7cf4](https://github.com/mindbody/cra-shared-ui-scripts/commit/22a7cf440c6180b56d063bcc7941d99545e2bd8e))

### [1.1.8](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.7...v1.1.8) (2020-03-10)


### Bug Fixes

* making message stand out more ([6417296](https://github.com/mindbody/cra-shared-ui-scripts/commit/6417296ebd0ace5f64fec95abbca478e3fc688a6))

### [1.1.7](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.6...v1.1.7) (2020-03-09)


### Bug Fixes

* logging error message when it fails ([fe2afdf](https://github.com/mindbody/cra-shared-ui-scripts/commit/fe2afdfb17128fd69bc35258db0e339fd0878520))

### [1.1.6](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.5...v1.1.6) (2020-03-09)


### Bug Fixes

* added logging ([0c1d3bb](https://github.com/mindbody/cra-shared-ui-scripts/commit/0c1d3bbad4b046cb54398cb7b64a3b301b961bb0))

### [1.1.5](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.4...v1.1.5) (2020-03-09)


### Bug Fixes

* logging error message ([c17b07d](https://github.com/mindbody/cra-shared-ui-scripts/commit/c17b07da1cec6002e276e6776c5199485be26676))

### [1.1.4](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.3...v1.1.4) (2020-03-09)


### Bug Fixes

* added error message before exiting ([fdb4003](https://github.com/mindbody/cra-shared-ui-scripts/commit/fdb4003505e457bf4e609aee1096a00d07529453))

### [1.1.3](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.2...v1.1.3) (2020-03-09)


### Bug Fixes

* added process.exit to the exit code ([6350681](https://github.com/mindbody/cra-shared-ui-scripts/commit/63506814711ff76c90e9acde8238169d5ab0a71c))

### [1.1.2](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.1...v1.1.2) (2020-03-09)


### Bug Fixes

* moving all reads into try/catch to catch the error and exit early ([28c44f1](https://github.com/mindbody/cra-shared-ui-scripts/commit/28c44f1e73d973c902ab17859e72d0aad54fb117))

### [1.1.1](https://github.com/mindbody/cra-shared-ui-scripts/compare/v1.1.0...v1.1.1) (2020-03-09)


### Bug Fixes

* handling rejection error if file not found ([957dc4b](https://github.com/mindbody/cra-shared-ui-scripts/commit/957dc4bb029fa9243a92abb9e6bdca70617ba0e9))

## 1.1.0 (2020-02-19)


### Features

* initial commit 2e42dd8
* updated scripts to deploy single versioned folder and use .env file 429be8c
