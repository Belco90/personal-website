import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { Box, Flex } from '@chakra-ui/core';

import globalStyles from '../globalStyles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const MainLayout = ({ children }) => (
  <Flex>
    <Global styles={globalStyles} />
    <Box flex={1}>{children}</Box>
  </Flex>
);

MainLayout.propTypes = propTypes;

export default MainLayout;
