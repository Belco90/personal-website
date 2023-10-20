import { Container, Heading, VStack } from '@chakra-ui/react'

import ProjectCard from '~/components/ProjectCard'
import type { Project } from '~/models'

interface ProjectsPageProps {
	projects: Array<Project>
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
	return (
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
	)
}

export default ProjectsPage
