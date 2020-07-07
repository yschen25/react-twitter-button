module.exports = {
    "presets": ['@babel/preset-react', '@babel/preset-env'],
    "plugins": [
        ["@babel/plugin-proposal-class-properties", {"loose": true}]
    ],
    "env": {
        "production": {
            "plugins": [
                ["react-remove-properties", {"properties": ["data-testid"]}]
            ]
        }
    }
};