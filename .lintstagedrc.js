const path = require('node:path')
const { ESLint } = require('eslint')

const removeIgnoredFiles = async (files) => {
	const eslint = new ESLint()
	const ignoredFiles = await Promise.all(
		files.map((file) => eslint.isPathIgnored(file)),
	)
	return files.filter((_, i) => !ignoredFiles[i])
}

const buildEslintCommand = async (filenames) => {
	const filteredFilenames = await removeIgnoredFiles(filenames)
	const filenamesFlag = filteredFilenames
		.map((filename) => path.relative(process.cwd(), filename))
		.map((filename) => `--file ${filename}`)
		.join(' ')

	return `next lint --fix ${filenamesFlag}`
}

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	'*': 'prettier --write --ignore-unknown',
}
