module.exports = {
    name: "webshift-demo",
    keywords: ["webshift"],
    author: "",
    license: "",
    main: "",
    scripts: {
        "start": "LOG_LEVEL=verbose webshift dev",
        "build": "NODE_ENV=production webshift build",
        "build:start": "(cd build && node server.js)"
    },
    eslintConfig: {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    babel: {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        "plugins": [
            "@loadable/babel-plugin"
        ]
    },
    browserslist: {
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
};