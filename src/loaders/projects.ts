import { createServerFn } from '@tanstack/react-start'

import type { GitHubRepo, Project } from '#/models'

export const PROJECTS_META_INFO: Array<{
	githubRepo: `${string}/${string}`
	packageUrl?: string
}> = [
	{
		githubRepo: 'testing-library/eslint-plugin-testing-library',
		packageUrl: 'https://www.npmjs.com/package/eslint-plugin-testing-library',
	},
	{ githubRepo: 'Belco90/octochangelog' },
	{ githubRepo: 'Belco90/mastodonte-js' },
]

type NpmDownloadsResponse = {
	downloads: number
	start: string // YYYY-MM-DD
	end: string // YYYY-MM-DD
	package: string
}

function mapDataArrayToObjectCollection<DataType>(
	arr: Array<{ url: string; data: DataType } | undefined>,
): Record<string, DataType> {
	const collection: Record<string, DataType> = {}
	for (const filteredArrItem of arr) {
		if (filteredArrItem) {
			collection[filteredArrItem.url] = filteredArrItem.data
		}
	}

	return collection
}

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN

export const getProjects = createServerFn().handler(
	async (): Promise<Array<Project>> => {
		// eslint-disable-next-line no-console
		console.log('[START] Fetching projects data...')
		const repos = await Promise.all(
			PROJECTS_META_INFO.map(async ({ githubRepo }) => {
				const [owner, repo] = githubRepo.split('/')
				const repoUrl = `https://api.github.com/repos/${owner}/${repo}`

				// eslint-disable-next-line no-console
				console.log(`Fetching GitHub repo data for "${githubRepo}"...`)
				try {
					const response = await fetch(repoUrl, {
						headers: {
							Accept: 'application/vnd.github.v3+json',
							Authorization: GITHUB_ACCESS_TOKEN
								? `token ${GITHUB_ACCESS_TOKEN}`
								: '',
						},
					})

					if (response.ok) {
						const repo: GitHubRepo = (await response.json()) as GitHubRepo

						// eslint-disable-next-line no-console
						console.log(
							`Successfully fetched GitHub repo data for "${githubRepo}".`,
						)
						return { url: githubRepo, data: repo }
					} else {
						const responseJson = (await response.json()) as unknown
						throw new Error(JSON.stringify(responseJson))
					}
				} catch (e) {
					// eslint-disable-next-line no-console
					console.warn(`Problem fetching "${githubRepo}" repo: ${String(e)}`)
				}
			}),
		)

		const packages = await Promise.all(
			PROJECTS_META_INFO.filter((project) => project.packageUrl != null).map(
				async (project) => {
					const packageName = project.packageUrl?.split('/').pop() ?? ''
					// eslint-disable-next-line no-console
					console.log(`Fetching npm package data for "${packageName}"...`)
					try {
						const response = await fetch(
							`https://api.npmjs.org/downloads/point/last-week/${packageName}`,
						)

						if (response.ok) {
							const packageDownloads =
								(await response.json()) as NpmDownloadsResponse

							// eslint-disable-next-line no-console
							console.log(
								`Successfully fetched npm package data for "${packageName}".`,
							)
							return {
								url: project.githubRepo,
								data: {
									downloads: packageDownloads.downloads,
									url: project.packageUrl ?? '',
								},
							}
						} else {
							const responseJson = (await response.json()) as unknown
							throw new Error(JSON.stringify(responseJson))
						}
					} catch (e) {
						// eslint-disable-next-line no-console
						console.warn(
							`Problem fetching "${packageName}" npm package: ${String(e)}`,
						)
					}
				},
			),
		)

		const reposCollection = mapDataArrayToObjectCollection(repos)
		const packagesCollection = mapDataArrayToObjectCollection(packages)

		const projects = PROJECTS_META_INFO.map(({ githubRepo }) => ({
			repo: reposCollection[githubRepo],
			npmPackage: packagesCollection[githubRepo] ?? null,
		})).filter((project): project is Project => project.repo != null)

		// eslint-disable-next-line no-console
		console.log('[END] Finished fetching projects data.')
		return projects
	},
)
