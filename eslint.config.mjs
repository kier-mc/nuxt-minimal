import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: {
    css: true,
  },
  rules: {
    "no-console": "warn",
  },
  stylistic: {
    quotes: "double",
    semi: true,
  },
});
