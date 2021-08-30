#!/usr/bin/env node

const create = require("base-create");
const fs = require('fs');
const glob = require('glob');

const getFilesCopyConfig = (filePathOrigin, filePathDestination) => {
    return {
        path: filePathDestination,
        contents: fs.readFileSync(filePathOrigin, "utf8"),
    };
};

const srcFiles = glob
    .sync('**/*.*', { cwd: `${__dirname}/react-emotion/` })
    .map(f => getFilesCopyConfig(`${__dirname}/react-emotion/${f}`, f));

const config = {
    files: [
        ...srcFiles,
        getFilesCopyConfig(`${__dirname}/.gitignore.template`, '.gitignore'),
        getFilesCopyConfig(`${__dirname}/Dockerfile`, 'Dockerfile'),
        getFilesCopyConfig(`${__dirname}/webshift.config.js`, 'webshift.config.js'),
        getFilesCopyConfig(`${__dirname}/.env.template`, '.env.template'),
        getFilesCopyConfig(`${__dirname}/.env.template`, '.env'),
        getFilesCopyConfig(`${__dirname}/babel.config.js`, 'babel.config.js'),
    ],
    package: require('./package'),
    dependencies: [
        "webshift",
        "react", "react-dom", "react-router", "react-router-dom",
        "@loadable/babel-plugin", "@loadable/component", "@loadable/server",
        "axios",
        "@emotion/react", "@emotion/styled",
        "styled-system",
    ],
    devDependencies: [
    ],
    skipReadme: true,
    skipGitignore: true
};

create(config);
