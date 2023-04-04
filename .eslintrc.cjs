module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "max-statements-per-line": ["error", { max: 1 }],
    "no-multi-spaces": ["error"],
    "brace-style": ["off", "stroustrup", { allowSingleLine: true }],
    "no-case-declarations": "off",
    "no-extra-boolean-cast": "error",

    // React
    "react/react-in-jsx-scope": 0,
    "react/jsx-max-props-per-line": [2, { maximum: 1 }],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-props-no-multi-spaces": [2],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],

    // Typescript
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
  },
};
