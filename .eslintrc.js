module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		jest: true,
	},
	extends: [
		'airbnb-base',
		'plugin:prettier/recommended',
		'plugin:jest/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['prettier', 'jest', '@typescript-eslint'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
			},
			typescript: {
				alwaysTryTypes: true,
				directory: './',
			},
		},
	},
	ignorePatterns: ['node_modules/', 'lib/', 'public/', 'build/', 'dist/'],
	rules: {
		'prettier/prettier': 'error',
		'class-methods-use-this': 'off',
		'import/no-named-as-default': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/extensions': 'off',
		'jest/no-mocks-import': 'off',
		'no-plusplus': 'off',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error'],
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public',
			},
		],
		indent: 'off',
		'@typescript-eslint/indent': ['off', 'tab'],
		'@typescript-eslint/explicit-function-return-type': ['off'],
		'@typescript-eslint/no-var-requires': ['off'],
		'@typescript-eslint/ban-ts-ignore': ['off'],
		'@typescript-eslint/camelcase': 'off',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: './tsconfig.json',
			},
			rules: {
				// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
				'import/named': 'off',
				'import/namespace': 'off',
				'import/default': 'off',
				'import/no-named-as-default-member': 'off',
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				'no-var': ['off'],
				'vars-on-top': ['off'],
			},
		},
	],
};
