#!/usr/bin/env node

const create = require("base-create");
const fs = require('fs');
const glob = require('glob');

const getFilesConfig = (cwd, filePath) => {
    return {
        path: filePath,
        contents: fs.readFileSync(`${cwd}${filePath}`, "utf8"),
    };
};

const srcFiles = glob
    .sync('**/*.*', { cwd: `${__dirname}/react-emotion/` })
    .map(f => getFilesConfig(`${__dirname}/react-emotion/`, f));

const config = {
    files: [
        ...srcFiles,
        getFilesConfig(`${__dirname}/`, ".gitignore"),
        getFilesConfig(`${__dirname}/`, "Dockerfile"),
        getFilesConfig(`${__dirname}/`, "webshift.config.js"),
    ],
    package: require('./package'),
    dependencies: [
        "@emotion/react",
        "@emotion/styled",
        "@loadable/babel-plugin",
        "@loadable/component",
        "@loadable/server",
        "axios",
        "react",
        "react-dom",
        "react-router",
        "react-router-dom",
        "styled-system",
        "webshift"
    ],
    devDependencies: [
    ],
    skipReadme: true,
    skipGitignore: true
};

create(config);
