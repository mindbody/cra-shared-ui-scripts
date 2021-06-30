# Prep Shared UI

This package helps prep shared UI's for mindbody built with create react app continuous integration (CI) and continuous deployment (CD) pipelines. This package will help with the following:

- Checking if a deployed version exists
- Supports multiple versions of your application on a CDN in multiple environments
- Supports chunking 

## Prerequisites:

1. You want to be able to consume a specific version of a package on a CDN in multiple environments. 
2. You're using create-react-app to bundle your application
3. You bump a version every time you create a pull request

## How it works

You'll want to sandwich the react build command between two methods this package exposes. In your package.json or build script replace

```
"build": "react-scripts build"
```

with:

```
"build": "yarn prep-shared-ui && react-scripts build && yarn finalize-shared-ui"
```

_Replace the CDN flag value with the URL and path of where your application is deployed to. If you are hosting the application in multiple environments, you'll need to use a dockerfile and replace the token in the build pipeline_

You're app will be deployed and live on the CDN in folders matching your versions. All files located in the `build` directory of where the command is run will be placed into a versioned folder and then your release pipeline can deploy that folder to the CDN. 

Example of what your CDN file structure will look like:

```
https://your-cdn.com/path/to/app/1.0.0/{all files in the build folder}
https://your-cdn.com/path/to/app/1.1.0/{all files in the build folder}
https://your-cdn.com/path/to/app/2.0.0/{all files in the build folder}
```

_Note that the `finalize-shared-ui` will also copy over a `CHANGELOG.md` file so your consumers can see what actually changed_ 

## Recommendations

You want to get started using this without worrying about setting it up when you're starting a new project? Use our [create react app template and follow the steps in the readme](https://github.com/mindbody/cra-template-mb-ui) to get started.

## Other

Proceed with caution: In the event the CDN is returning abnormal responses and you need to bypass the version check you can pass the flag `prep-shared-ui --dangerouslyBypassVersionCheck` as part of the build. Before you complete your PR be sure the version doesn't exist on the CDN manually.
