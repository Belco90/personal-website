import { Flex, Heading, Link, HStack, Tag, Text, Icon } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { FaRegStar, FaNpm } from 'react-icons/fa'

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  downloads: PropTypes.number,
}

const ProjectCard = ({
  title,
  description,
  language,
  url,
  stars,
  downloads,
  ...rest
}) => {
  return (
    <Flex direction="column" p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">
        <Link href={url} color="primary.500">
          {title}
        </Link>
      </Heading>
      <Text flex={1} my={4}>
        {description}
      </Text>
      <HStack spacing={8}>
        <Tag size="md">{language}</Tag>
        <Flex align="center">
          <Icon as={FaRegStar} aria-label="Stars" mr={1} />
          <Text>{stars}</Text>
        </Flex>
        {!!downloads && (
          <Flex align="center">
            <Icon as={FaNpm} aria-label="npm downloads" mr={1} boxSize={6} />
            <Text>
              {new Intl.NumberFormat(undefined, { notation: 'compact' }).format(
                downloads
              )}
            </Text>
          </Flex>
        )}
      </HStack>
    </Flex>
  )
}

ProjectCard.propTypes = propTypes

export default ProjectCard
