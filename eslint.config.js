// eslint.config.js
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        process: "readonly", 
        __dirname: "readonly", 
        module: "readonly", 
        $: "readonly",        
        browser: "readonly",
      },
    },
    rules: {
      "no-empty": "error",
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
