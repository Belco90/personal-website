import { IconButton, useColorMode } from '@chakra-ui/react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const title = `Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`

  return (
    <IconButton
      aria-label={title}
      title={title}
      icon={colorMode === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
      onClick={toggleColorMode}
      variant="ghost"
      fontSize="24px"
    />
  )
}

export default ColorModeButton
