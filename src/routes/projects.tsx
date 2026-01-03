import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import ProjectCard from '#/components/ProjectCard'
import { Heading } from '#/components/ui'
import { getProjects } from '#/loaders/projects'
import { seo, USER_CONFIG } from '#/seo'
import { Container, VStack } from '#/styled-system/jsx'

const retrieveProjectsSecurely = createServerFn().handler(() => getProjects())

export const Route = createFileRoute('/projects')({
	head: () => ({
		meta: seo({
			title: 'Projects',
			description: `${USER_CONFIG.author.name}'s OSS and side projects`,
		}),
	}),
	loader: () => retrieveProjectsSecurely(),
	headers: () => ({
		// Cache at CDN for 1 hour, allow stale content for up to 1 day
		'Cache-Control':
			'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
	}),
	staleTime: 5 * 60_000, // 5 minutes client-side
	component: ProjectsPage,
})

function ProjectsPage() {
	const projects = Route.useLoaderData()

	return (
		<Container maxWidth="breakpoint-md">
			<Heading
				mb="4"
				textGradient="to-tr"
				gradientFrom="accent.outline.fg"
				gradientTo="accent.plain.bg.hover"
			>
				Projects
			</Heading>

			<VStack gap="6">
				{projects.map(({ repo, npmPackage }) => (
					<ProjectCard key={repo.id} repo={repo} npmPackage={npmPackage} />
				))}
			</VStack>
		</Container>
	)
}
