import { HiDownload, HiOutlineStar } from 'react-icons/hi'

import { Heading, Link, Text } from '#/components/ui'
import type { GitHubRepo, NpmPackage } from '#/models'
import { Flex, HStack, styled } from '#/styled-system/jsx'

interface ProjectCardProps {
	repo: GitHubRepo
	npmPackage?: NpmPackage
}

const ProjectCard = ({ repo, npmPackage }: ProjectCardProps) => {
	const formattedDownloads = npmPackage?.downloads
		? new Intl.NumberFormat('en-US').format(npmPackage.downloads)
		: null

	const formattedStars = new Intl.NumberFormat('en-US', {
		notation: 'compact',
		compactDisplay: 'short',
	}).format(repo.stargazers_count)

	return (
		<styled.article
			width="full"
			display="flex"
			flexDirection="column"
			gap="4"
			p="4"
			shadow="card"
			borderRadius="lg"
			bgColor={{ base: 'gray.subtle.bg/70', _dark: 'gray.subtle.bg' }}
		>
			<Heading fontSize="xl">
				<Link href={repo.html_url} variant="underline">
					{repo.name}
				</Link>
			</Heading>

			<Text>{repo.description}</Text>

			<HStack gap="8">
				<styled.span
					display="inline-flex"
					verticalAlign="top"
					alignItems="center"
					minHeight="6"
					maxWidth="full"
					fontWeight="medium"
					fontSize="xs"
					lineHeight="tight"
					bgColor="accent.plain.bg.active"
					px="2"
					rounded="md"
				>
					{repo.language}
				</styled.span>
				<Flex align="center" gap="1" title="GitHub stars">
					<HiOutlineStar aria-hidden focusable={false} />
					<span>{formattedStars}</span>
				</Flex>
				{!!formattedDownloads && (
					<Link
						href={npmPackage?.url}
						title="npm weekly downloads"
						variant="underline"
						display="flex"
						alignItems="center"
						gap="1"
						px="2"
						rounded="sm"
					>
						<HiDownload aria-hidden focusable={false} />
						<span>{formattedDownloads}</span>
					</Link>
				)}
			</HStack>
		</styled.article>
	)
}

export default ProjectCard
