// @ts-check
import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
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
			'@typescript-eslint/consistent-type-exports': ['error'],
			'@typescript-eslint/consistent-type-imports': ['error'],

			// Disabling because of index errors on interfaces, which works fine in type aliases:
			// https://bobbyhadz.com/blog/typescript-index-signature-for-type-is-missing-in-type
			'@typescript-eslint/consistent-type-definitions': 'off',

			// Import
			// 'import/newline-after-import': 'error',
			// 'import/order': [
			// 	'error',
			// 	{
			// 		'newlines-between': 'always',
			//
			// 		alphabetize: {
			// 			order: 'asc',
			// 			caseInsensitive: false,
			// 		},
			//
			// 		groups: [
			// 			'builtin',
			// 			'external',
			// 			'internal',
			// 			['parent', 'sibling', 'index'],
			// 			'object',
			// 			'type',
			// 		],
			//
			// 		pathGroups: [
			// 			{
			// 				pattern: '#/**',
			// 				group: 'internal',
			// 				position: 'after',
			// 			},
			// 		],
			// 	},
			// ],

			// React
			// 'react/self-closing-comp': 'warn',
		},
	},
	// Plain JS files
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	prettierRecommended,
	globalIgnores([
		'**/node_modules',
		'**/public',
		'**/styled-system',
		'**/dist',
	]),
)
