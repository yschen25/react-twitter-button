module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "plugins": ["prettier"],
    "parser": "babel-eslint",
    "extends": [
        "prettier",
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
    },
    "rules": {
        "no-unused-vars": "off",
    }
};