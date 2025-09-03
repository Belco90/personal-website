// @ts-check

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default defineConfig([
	{
		extends: compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended-type-checked',
			'plugin:@typescript-eslint/stylistic-type-checked',
			'next/core-web-vitals',
			'prettier',
		),

		languageOptions: {
			parser: tsParser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},

		rules: {
			'no-console': 'warn',
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'@typescript-eslint/unbound-method': 'off',

			'@typescript-eslint/array-type': [
				'warn',
				{
					default: 'generic',
				},
			],

			'@typescript-eslint/no-floating-promises': 'error',

			'@typescript-eslint/consistent-type-exports': [
				'error',
				{
					fixMixedExportsWithInlineTypeSpecifier: true,
				},
			],

			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					fixStyle: 'inline-type-imports',
				},
			],

			'@typescript-eslint/no-explicit-any': 'error',
			'import/newline-after-import': 'error',

			'import/order': [
				'error',
				{
					'newlines-between': 'always',

					alphabetize: {
						order: 'asc',
						caseInsensitive: false,
					},
				},
			],

			'react/self-closing-comp': 'warn',
		},
	},
	{
		files: ['**/*.js'],
		extends: compat.extends('plugin:@typescript-eslint/disable-type-checked'),
	},
	{
		// Config files
		files: ['**/*.mjs', '**/*.cjs'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	globalIgnores([
		'**/node_modules',
		'**/.next',
		'**/public',
		'**/styled-system',
		'**/next-env.d.ts',
	]),
])
