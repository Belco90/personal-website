import { Container, panda, VStack } from '@/styled-system/jsx'
import ProjectCard from '~/components/ProjectCard'
import type { Project } from '~/models'

interface ProjectsPageProps {
	projects: Array<Project>
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
	return (
		<Container maxWidth="breakpoint-md">
			<panda.h1 mb="4" fontSize="4xl" textGradient="heading">
				Projects
			</panda.h1>
			<VStack gap="6">
				{projects.map(({ repo, npmPackage }) => (
					<ProjectCard key={repo.id} repo={repo} npmPackage={npmPackage} />
				))}
			</VStack>
		</Container>
	)
}

export default ProjectsPage
