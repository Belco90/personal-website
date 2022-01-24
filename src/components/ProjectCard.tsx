import type { GitHubRepo, NpmPackage } from '~/models'
import type { LinkBoxProps } from '@chakra-ui/react'
import {
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  HStack,
  Tag,
  Text,
  Icon,
  useColorModeValue,
  useToken,
} from '@chakra-ui/react'
import { FaRegStar, FaNpm } from 'react-icons/fa'

interface CustomProps {
  repo: GitHubRepo
  npmPackage?: NpmPackage
}

type ProjectCardProps = LinkBoxProps & CustomProps

const ProjectCard = ({ repo, npmPackage, ...rest }: ProjectCardProps) => {
  const [primaryLight, primaryDark] = useToken('colors', [
    'primary.100',
    'primary.600',
  ])
  const cardBgColor = useColorModeValue('gray.50', 'gray.700')
  const cardShadowColor = useColorModeValue(primaryLight, primaryDark)

  const formattedDownloads = npmPackage
    ? new Intl.NumberFormat('en-US').format(npmPackage.downloads)
    : null

  return (
    <LinkBox
      as="article"
      w="full"
      display="flex"
      flexDirection="column"
      gap={4}
      p={4}
      shadow={`0.2rem 0.2em ${cardShadowColor}`}
      borderRadius="lg"
      bgColor={cardBgColor}
      {...rest}
    >
      <Heading fontSize="xl">
        <LinkOverlay href={repo.html_url}>{repo.name}</LinkOverlay>
      </Heading>
      <Text flex={1}>{repo.description}</Text>
      <HStack spacing={8}>
        <Tag size="md">{repo.language}</Tag>
        <Flex align="center" gap={1}>
          <Icon as={FaRegStar} aria-hidden />
          <Text as="span" aria-label="GitHub stars">
            {repo.stargazers_count}
          </Text>
        </Flex>
        {!!npmPackage && (
          <Link
            href={npmPackage.url}
            display="flex"
            gap={1}
            px={2}
            textDecorationLine="underline"
            borderRadius="sm"
            _hover={{
              bgColor: 'primary.100',
            }}
          >
            <Icon as={FaNpm} aria-hidden boxSize={6} />
            <Text as="span" aria-label="npm weekly downloads">
              {formattedDownloads}
            </Text>
          </Link>
        )}
      </HStack>
    </LinkBox>
  )
}

export default ProjectCard
