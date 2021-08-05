module.exports = {
    name: "webshift-demo",
    keywords: ["webshift"],
    author: "",
    license: "",
    main: "",
    scripts: {
        "start": "webshift dev",
        "build": "NODE_ENV=production webshift build && npm run build:copy:env",
        "build:copy:env": "cp .env.template build/.env",
        "build:start": "(cd build && node server.js)"
    },
    eslintConfig: {
        "extends": [
            "react-app",
            "react-app/jest"
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