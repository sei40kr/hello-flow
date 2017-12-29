module.exports = {
  parser: "babel-eslint",
  plugins: ["flowtype"],
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype"
  ]
};
