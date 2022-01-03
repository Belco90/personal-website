import { IconButton, useColorMode } from '@chakra-ui/react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      icon={colorMode === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
      onClick={toggleColorMode}
      variant="ghost"
      fontSize="24px"
    />
  )
}

export default ColorModeButton
