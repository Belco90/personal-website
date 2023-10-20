import { format, subDays } from 'date-fns'
import { type FC } from 'react'

import ProjectsPage from '~/app/projects/ProjectsPage'
import { type GitHubRepo, type Project } from '~/models'

const PROJECTS_META_INFO: Array<{ githubRepo: string; packageUrl?: string }> = [
	{
		githubRepo: 'testing-library/eslint-plugin-testing-library',
		packageUrl: 'https://www.npmjs.com/package/eslint-plugin-testing-library',
	},
	{ githubRepo: 'octoclairvoyant/octoclairvoyant-webapp' },
	{ githubRepo: 'Belco90/react-advanced-patterns-components' },
	{ githubRepo: 'Belco90/mastodonte-js' },
]

const NPM_STAT_DATE_FORMAT = 'y-MM-dd'

// TODO: set metadata
// title="Projects"
// description={`${UserConfig.author.name}'s Projects`}
// openGraph={{ description: `${UserConfig.author.name}'s Projects` }}

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

async function getProjects(): Promise<Array<Project>> {
	const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
	const repos = await Promise.all(
		PROJECTS_META_INFO.map(async ({ githubRepo }) => {
			const [owner, repo] = githubRepo.split('/')
			const repoUrl = `https://api.github.com/repos/${owner}/${repo}`

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
					return { url: githubRepo, data: repo }
				}
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log(`Problem fetching ${githubRepo}: ${String(e)}`)
			}
		}),
	)

	const downloadsFromDate = format(subDays(new Date(), 7), NPM_STAT_DATE_FORMAT)
	const downloadsToDate = format(new Date(), NPM_STAT_DATE_FORMAT)
	const packages = await Promise.all(
		PROJECTS_META_INFO.filter((project) => !!project.packageUrl).map(
			async (project) => {
				const packageName = project.packageUrl?.split('/').pop() ?? ''
				const response = await fetch(
					`https://npm-stat.com/api/download-counts?package=${packageName}&from=${downloadsFromDate}&until=${downloadsToDate}`,
				)

				type PackageDownloads = Record<string, number>

				if (response.ok) {
					const packageDownloads: PackageDownloads =
						(await response.json()) as PackageDownloads
					const totalArray = Object.values(
						packageDownloads[packageName],
					) as Array<PackageDownloads[string]>
					const total = totalArray.reduce(
						(acc, currentValue) => acc + currentValue,
						0,
					)

					return {
						url: project.githubRepo,
						data: { downloads: total, url: project.packageUrl ?? '' },
					}
				}
			},
		),
	)

	const reposCollection = mapDataArrayToObjectCollection(repos)
	const packagesCollection = mapDataArrayToObjectCollection(packages)

	const projects = PROJECTS_META_INFO.map(({ githubRepo }) => {
		return {
			repo: reposCollection[githubRepo],
			npmPackage: packagesCollection[githubRepo] ?? null,
		}
	}).filter(({ repo }) => !!repo)

	return projects
}

export const revalidate = 5

const Page: FC = async () => {
	const projects = await getProjects()
	return <ProjectsPage projects={projects} />
}

export default Page
