import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/react'

import Header from './Header'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const MainLayout = ({ children }) => (
  <Flex height="100%" direction="column">
    <Header position="fixed" shadow="lg" width="full" />
    <Box flex="1" mt={24} pb={8}>
      {children}
    </Box>
  </Flex>
)

MainLayout.propTypes = propTypes

export default MainLayout
