// @ts-check
import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	// TODO: enable equivalent to eslint-config-next
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
	// Config files
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	prettierRecommended,
	globalIgnores(['**/node_modules', '**/public', '**/styled-system']),
)
