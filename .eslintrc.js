module.exports = {
  extends: ["react-app"],
  rules: {
    "prefer-const": ["error"],
    "no-console": "off",
    semi: ["error", "never"],
    quotes: ["error", "double", { avoidEscape: true }],
    "no-unused-vars": ["error", { vars: "all", args: "after-used" }],
    "no-trailing-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { max: 2 }],
    curly: ["error", "multi-line"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-anonymous-default-export": "off",
  },
}
