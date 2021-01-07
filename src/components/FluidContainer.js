import { Box } from '@chakra-ui/react'

const FluidContainer = (props) => (
  <Box
    width="full"
    maxWidth="1280px"
    mx="auto"
    px={{ base: 2, md: 6 }}
    {...props}
  />
)

export default FluidContainer
