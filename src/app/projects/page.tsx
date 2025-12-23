import { format, subDays } from 'date-fns'
import { type FC } from 'react'

import ProjectsPage from '#/app/projects/ProjectsPage'
import { openGraph } from '#/routes/shared-metadata'
import { type GitHubRepo, type Project } from '#/models'
import { USER_CONFIG } from '#/user-config'

export const revalidate = 60 // revalidate at most every hour

const metaDescription = `${USER_CONFIG.author.name}'s OSS and side projects`
export const metadata = {
	title: 'Projects',
	description: metaDescription,
	openGraph: {
		...openGraph,
		url: '/projects',
		title: metaDescription,
	},
}

const Page: FC = async () => {
	const projects = await getProjects()
	return <ProjectsPage projects={projects} />
}

export default Page
