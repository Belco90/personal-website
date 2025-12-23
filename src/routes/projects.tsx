import { createFileRoute } from '@tanstack/react-router'
import { seo, USER_CONFIG } from '#/seo'
import { Container, styled, VStack } from '#/styled-system/jsx'
import ProjectCard from '#/components/ProjectCard'

import type { Project } from '#/models'

export const Route = createFileRoute('/projects')({
	head: () => ({
		meta: seo({
			title: 'Projects',
			description: `${USER_CONFIG.author.name}'s OSS and side projects`,
		}),
	}),
	component: ProjectsPage,
})

function ProjectsPage() {
	// TODO: handle error fetching projects
	const projects: Array<Project> = []

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
