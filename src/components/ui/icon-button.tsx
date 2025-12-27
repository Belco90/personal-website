import { Button, type ButtonProps } from './button'

import type { RefObject } from 'react'

export type IconButtonProps = ButtonProps

export const IconButton = function IconButton({
	ref,
	...props
}: IconButtonProps & { ref?: RefObject<HTMLButtonElement | null> }) {
	return <Button px="0" py="0" ref={ref} {...props} />
}
