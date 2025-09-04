// @ts-check

import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
})

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	prettierRecommended,
	{
		extends: compat.extends('next/core-web-vitals'),
	},
	{
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			// General
			'no-console': 'warn',

			// TypeScript
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

			// Import
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

			// React
			'react/self-closing-comp': 'warn',
		},
	},
	// Config files
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	globalIgnores([
		'**/node_modules',
		'**/.next',
		'**/public',
		'**/styled-system',
		'**/next-env.d.ts',
	]),
)
