import {
  Flex,
  Heading,
  Link,
  HStack,
  Tag,
  Text,
  Icon,
  Tooltip,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { FaRegStar, FaNpm } from 'react-icons/fa'

const propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
  }).isRequired,
  npmPackage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    downloads: PropTypes.number.isRequired,
  }),
}

const ProjectCard = ({ repo, npmPackage, ...rest }) => {
  const formattedDownloads = npmPackage
    ? new Intl.NumberFormat().format(npmPackage.downloads)
    : null
  const compactDownloads = npmPackage
    ? new Intl.NumberFormat(undefined, {
        notation: 'compact',
      }).format(npmPackage.downloads)
    : null

  return (
    <Flex direction="column" p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">
        <Link href={repo.url} color="primary.500">
          {repo.name}
        </Link>
      </Heading>
      <Text flex={1} my={4}>
        {repo.description}
      </Text>
      <HStack spacing={8}>
        <Tag size="md">{repo.language}</Tag>
        <Flex align="center">
          <Icon as={FaRegStar} aria-label="Stars" mr={1} />
          <Text as="span">{repo.stargazers_count}</Text>
        </Flex>
        {!!npmPackage && (
          <Tooltip
            hasArrow
            label={`Weekly npm downloads: ${formattedDownloads}`}
          >
            <Link href={npmPackage.url}>
              <Flex align="center">
                <Icon
                  as={FaNpm}
                  aria-label="Weekly npm downloads"
                  mr={1}
                  boxSize={6}
                />
                <Text as="span">{compactDownloads}</Text>
              </Flex>
            </Link>
          </Tooltip>
        )}
      </HStack>
    </Flex>
  )
}

ProjectCard.propTypes = propTypes

export default ProjectCard
