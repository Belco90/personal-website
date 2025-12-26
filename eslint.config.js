// @ts-check
import eslint from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier/flat'
import * as importX from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import * as tsEslint from 'typescript-eslint'

export default defineConfig(
	eslint.configs.recommended,
	tsEslint.configs.recommendedTypeChecked,
	tsEslint.configs.stylisticTypeChecked,
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	importX.flatConfigs.react,
	eslintReact.configs['recommended-type-checked'],
	reactHooks.configs.flat.recommended,
	jsxA11y.flatConfigs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
				...globals.browser,
			},
			parser: tsEslint.parser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				projectService: true,
			},
		},
	},
	{
		plugins: {
			'@stylistic': stylistic,
		},
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
			// Rules enabled by `import-x/recommended` but are better handled by
			// TypeScript and typescript-eslint.
			'import-x/default': 'off',
			'import-x/export': 'off',
			'import-x/namespace': 'off',
			'import-x/no-unresolved': 'off',

			'import-x/newline-after-import': 'error',
			'import-x/order': [
				'error',
				{
					'newlines-between': 'always',

					alphabetize: {
						order: 'asc',
						caseInsensitive: false,
					},

					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling', 'index'],
						'object',
						'type',
					],

					pathGroups: [
						{
							pattern: '#/**',
							group: 'internal',
							position: 'after',
						},
					],
				},
			],

			// JSX A11Y
			'jsx-a11y/alt-text': [
				'warn',
				{
					elements: ['img'],
					img: ['Image'],
				},
			],

			// Stylistic (JSX)
			'@stylistic/jsx-self-closing-comp': 'warn',
			'@stylistic/jsx-quotes': 'warn',
		},
	},
	// Plain JS files
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
		extends: [tsEslint.configs.disableTypeChecked],
	},
	globalIgnores([
		'**/node_modules',
		'**/public',
		'**/styled-system',
		'**/dist',
		'**/.netlify',
	]),
	prettierConfig, // must always be the last one
)
