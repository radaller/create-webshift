#!/usr/bin/env node

const create = require("base-create");
const fs = require('fs');

create({
    dependencies: [
        "webshift",
        "react", "react-dom",
        "@emotion/react", "@emotion/styled", "styled-system",
        "react-router", "react-router-dom",
        "@loadable/babel-plugin @loadable/component @loadable/server"
    ],
    devDependencies: [
    ],
    package: {
        name: "webshift-demo",
        keywords: ["webshift"],
        scripts: {
            "start": "webshift dev",
            "build": "NODE_ENV=production webshift build",
            "build:start": "(cd build && node server.js)"
        },
        "eslintConfig": {
            "extends": [
                "react-app",
                "react-app/jest"
            ]
        },
        "babel": {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ],
            "plugins": [
                "@loadable/babel-plugin"
            ]
        },
        "browserslist": {
            "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
            ],
            "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
            ]
        }
    },
    files: [
        {
            path: "src/components/Bar.js",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/components/Bar.js`, "utf8"),
        },
        {
            path: "src/components/Button.js",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/components/Button.js`, "utf8"),
        },
        {
            path: "src/components/Header.js",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/components/Header.js`, "utf8"),
        },
        {
            path: "src/pages/Aboutus.js",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/pages/Aboutus.js`, "utf8"),
        },
        {
            path: "src/pages/Error.js",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/pages/Error.js`, "utf8"),
        },
        {
            path: "src/pages/Home.js",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/pages/Home.js`, "utf8"),
        },
        {
            path: "src/App.js",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/App.js`, "utf8"),
        },
        {
            path: "src/favicon.ico",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/favicon.ico`, "utf8"),
        },
        {
            path: "src/logo192.png",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/logo192.png`, "utf8"),
        },
        {
            path: "src/logo512.png",
            contents: fs.readFileSync(`${__dirname}/react-emotion/src/logo512.png`, "utf8"),
        },
        {
            path: ".gitignore",
            contents: fs.readFileSync(`${__dirname}/react-emotion/.gitignore.tmpl`, "utf8"),
        },
        {
            path: "Dockerfile",
            contents: fs.readFileSync(`${__dirname}/Dockerfile`, "utf8"),
        },
        {
            path: "README.md",
            contents: fs.readFileSync(`${__dirname}/react-emotion/README.md.tmpl`, "utf8"),
        },
        {
            path: "webshift.config.js",
            contents: fs.readFileSync(`${__dirname}/webshift.config.js`, "utf8"),
        },
    ]
}, {
    options: {
        skipReadme: false,
        skipGitignore: false
    }
});