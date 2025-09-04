import path from 'node:path'

import { ESLint } from 'eslint'

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
		.join(' ')

	return `eslint --fix --concurrency=auto ${filenamesFlag}`
}

const config = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	'*': 'prettier --write --ignore-unknown',
}

export default config
