import { Container, Heading, VStack } from '@chakra-ui/react'
import ProjectCard from '~/components/ProjectCard'
import { UserConfig } from '~/user.config'
import { NextSeo } from 'next-seo'
import { subDays, format } from 'date-fns'
import type { GitHubRepo, Project } from '~/models'
import type { GetStaticProps } from 'next'

const PROJECTS_META_INFO: Array<{ githubRepo: string; packageUrl?: string }> = [
	{
		githubRepo: 'testing-library/eslint-plugin-testing-library',
		packageUrl: 'https://www.npmjs.com/package/eslint-plugin-testing-library',
	},
	{ githubRepo: 'Belco90/octoclairvoyant' },
	{ githubRepo: 'Belco90/react-advanced-patterns-components' },
	{ githubRepo: 'Belco90/mastodonte-js' },
]

const NPM_STAT_DATE_FORMAT = 'y-MM-dd'
const REVALIDATE_SECONDS = 5

interface ProjectsPageProps {
	projects: Array<Project>
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
	return (
		<>
			<NextSeo
				title="Projects"
				description={`${UserConfig.author.name}'s Projects`}
				openGraph={{ description: `${UserConfig.author.name}'s Projects` }}
			/>
			<Container maxWidth="container.md">
				<Heading as="h1" variant="gradient" mb={4} fontSize="4xl">
					Projects
				</Heading>
				<VStack spacing={6}>
					{projects.map(({ repo, npmPackage }) => (
						<ProjectCard key={repo.id} repo={repo} npmPackage={npmPackage} />
					))}
				</VStack>
			</Container>
		</>
	)
}

function mapDataArrayToObjectCollection<DataType>(
	arr: Array<{ url: string; data: DataType } | undefined>
): Record<string, DataType> {
	const collection: Record<string, DataType> = {}
	for (const filteredArrItem of arr) {
		if (filteredArrItem) {
			collection[filteredArrItem.url] = filteredArrItem.data
		}
	}

	return collection
}

export const getStaticProps: GetStaticProps<{
	projects: Array<Project>
}> = async () => {
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
		})
	)

	const downloadsFromDate = format(subDays(new Date(), 7), NPM_STAT_DATE_FORMAT)
	const downloadsToDate = format(new Date(), NPM_STAT_DATE_FORMAT)
	const packages = await Promise.all(
		PROJECTS_META_INFO.filter((project) => !!project.packageUrl).map(
			async (project) => {
				const packageName = project.packageUrl?.split('/').pop() ?? ''
				const response = await fetch(
					`https://npm-stat.com/api/download-counts?package=${packageName}&from=${downloadsFromDate}&until=${downloadsToDate}`
				)

				type PackageDownloads = Record<string, number>

				if (response.ok) {
					const packageDownloads: PackageDownloads =
						(await response.json()) as PackageDownloads
					const totalArray = Object.values(
						packageDownloads[packageName]
					) as Array<PackageDownloads[string]>
					const total = totalArray.reduce(
						(acc, currentValue) => acc + currentValue,
						0
					)

					return {
						url: project.githubRepo,
						data: { downloads: total, url: project.packageUrl ?? '' },
					}
				}
			}
		)
	)

	const reposCollection = mapDataArrayToObjectCollection(repos)
	const packagesCollection = mapDataArrayToObjectCollection(packages)

	const projects = PROJECTS_META_INFO.map(({ githubRepo }) => {
		return {
			repo: reposCollection[githubRepo],
			npmPackage: packagesCollection[githubRepo] ?? null,
		}
	}).filter(({ repo }) => !!repo)

	return {
		props: {
			projects,
		},
		revalidate: REVALIDATE_SECONDS,
	}
}

export default ProjectsPage
