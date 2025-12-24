import { createFileRoute } from '@tanstack/react-router'

import ProjectCard from '#/components/ProjectCard'
import { getProjects } from '#/loaders/projects'
import { seo, USER_CONFIG } from '#/seo'
import { Container, styled, VStack } from '#/styled-system/jsx'

export const Route = createFileRoute('/projects')({
	head: () => ({
		meta: seo({
			title: 'Projects',
			description: `${USER_CONFIG.author.name}'s OSS and side projects`,
		}),
	}),
	loader: getProjects,
	staleTime: 3_600_000, // 1 hour
	component: ProjectsPage,
})

function ProjectsPage() {
	const projects = Route.useLoaderData()

	return (
		<Container maxWidth="breakpoint-md">
			<styled.h1 mb="4" fontSize="4xl" textGradient="heading">
				Projects
			</styled.h1>
			<VStack gap="6">
				{projects.map(({ repo, npmPackage }) => (
					<ProjectCard key={repo.id} repo={repo} npmPackage={npmPackage} />
				))}
			</VStack>
		</Container>
	)
}
