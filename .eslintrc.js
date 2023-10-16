module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'next/core-web-vitals',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		sourceType: 'module',
	},
	rules: {
		// General
		'no-console': 'warn',

		// TypeScript
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

		// React
		'react/self-closing-comp': 'warn',
	},

	overrides: [
		{
			files: ['*.js'],
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
		},
	],
}
