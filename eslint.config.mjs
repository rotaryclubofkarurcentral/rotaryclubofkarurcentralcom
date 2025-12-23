import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: [".vitepress/cache/**", ".vitepress/dist/**"],
  },
];
