module.exports = {
    "env": {
        "browser": true,
        "node": true, 
        "es2020": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/prop-types": 0
    }
};
