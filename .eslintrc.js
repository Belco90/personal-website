module.exports = {
	root: true,
	extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
	rules: {
		// JS
		'no-console': 'warn',

		// React
		'react/self-closing-comp': 'warn',
	},

	overrides: [
		{
			// TypeScript
			files: ['**/*.ts?(x)'],
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: ['./tsconfig.json'],
			},
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
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
			},
		},
	],
}
