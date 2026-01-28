import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const eslintConfig = defineConfig([
  ...nextVitals,
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
		files: ["**/*.ts"],
		rules: {
      "prefer-const": "error",
      "no-extra-boolean-cast": 0,
      semi: "error",
			"no-unused-vars": "warn",
		},
	},
]);

export default eslintConfig;
