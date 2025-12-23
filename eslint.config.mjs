import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["docs/.vitepress/cache/**", "docs/.vitepress/dist/**"],
  },
];
