import { HiDownload, HiOutlineStar } from 'react-icons/hi'

import { Flex, HStack, styled } from '@/styled-system/jsx'
import type { GitHubRepo, NpmPackage } from '~/models'

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
			bgColor={{ base: 'gray.50', _dark: 'gray.700' }}
		>
			<styled.h2 fontSize="xl">
				<styled.a
					href={repo.html_url}
					textDecorationLine="underline"
					_hover={{ color: { base: 'primary.500', _dark: 'primary.300' } }}
				>
					{repo.name}
				</styled.a>
			</styled.h2>

			<styled.p flex="1">{repo.description}</styled.p>

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
					bgColor={{ base: 'gray.200', _dark: 'gray.600' }}
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
					<styled.a
						href={npmPackage?.url}
						title="npm weekly downloads"
						display="flex"
						alignItems="center"
						gap="1"
						px="2"
						textDecorationLine="underline"
						rounded="sm"
						_hover={{ bgColor: 'primary.100', color: 'primary.700' }}
					>
						<HiDownload aria-hidden focusable={false} />
						<span>{formattedDownloads}</span>
					</styled.a>
				)}
			</HStack>
		</styled.article>
	)
}

export default ProjectCard
