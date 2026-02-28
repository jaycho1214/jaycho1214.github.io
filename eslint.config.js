import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: {
					ts: '@typescript-eslint/parser',
				},
			},
		},
		rules: {
			'svelte/no-navigation-without-resolve': 'off',
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/'],
	},
];
