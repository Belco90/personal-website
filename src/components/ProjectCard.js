import { Flex, Heading, Link, HStack, Tag, Text, Icon } from '@chakra-ui/react'
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
    ? new Intl.NumberFormat('en-US').format(npmPackage.downloads)
    : null

  return (
    <Flex
      direction="column"
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="primary.500"
      {...rest}
    >
      <Heading
        fontSize="xl"
        py={2}
        px={4}
        height={24}
        display="flex"
        alignItems="center"
        borderBottomColor="primary.500"
        borderBottomWidth="1px"
      >
        <Link href={repo.html_url}>{repo.name}</Link>
      </Heading>
      <Flex py={2} px={4} direction="column" height="full">
        <Text flex={1} mb={4}>
          {repo.description}
        </Text>
        <HStack spacing={8}>
          <Tag size="md">{repo.language}</Tag>
          <Flex align="center">
            <Icon as={FaRegStar} aria-label="Stars" mr={1} />
            <Text as="span">{repo.stargazers_count}</Text>
          </Flex>
          {!!npmPackage && (
            <Link href={npmPackage.url}>
              <Flex align="center">
                <Icon
                  as={FaNpm}
                  aria-label="Weekly npm downloads"
                  mr={1}
                  boxSize={6}
                />
                <Text as="span">{formattedDownloads}</Text>
              </Flex>
            </Link>
          )}
        </HStack>
      </Flex>
    </Flex>
  )
}

ProjectCard.propTypes = propTypes

export default ProjectCard
