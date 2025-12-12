import ProjectCard from '#/components/ProjectCard'
import type { Project } from '#/models'
import { Container, VStack, styled } from '#/styled-system/jsx'

interface ProjectsPageProps {
	projects: Array<Project>
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
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

export default ProjectsPage
