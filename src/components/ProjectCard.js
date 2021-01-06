import { Box, Flex, Heading, Link, Stack, Tag, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { FaRegStar } from 'react-icons/fa'

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
}

const ProjectCard = ({ title, description, language, url, stars, ...rest }) => {
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
      <Stack isInline spacing={8}>
        <Tag size="md">{language}</Tag>
        <Flex align="center">
          <Box as={FaRegStar} aria-label="Stars icon" mr={1} />
          <Text>{stars}</Text>
        </Flex>
      </Stack>
    </Flex>
  )
}

ProjectCard.propTypes = propTypes

export default ProjectCard
