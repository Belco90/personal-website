import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { Box, Flex } from '@chakra-ui/core';
import 'typeface-open-sans';

import globalStyles from '../globalStyles';
import Header from '../components/header';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const MainLayout = ({ children }) => (
  <Flex height="100%" direction="column">
    <Global styles={globalStyles} />
    <Header />
    <Box flex={1} mt={8}>
      {children}
    </Box>
  </Flex>
);

MainLayout.propTypes = propTypes;

export default MainLayout;
