import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/core'

import Header from './Header'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const MainLayout = ({ children }) => (
  <Flex height="100%" direction="column">
    <Header />
    <Box flex={1} mt={8}>
      {children}
    </Box>
  </Flex>
)

MainLayout.propTypes = propTypes

export default MainLayout
