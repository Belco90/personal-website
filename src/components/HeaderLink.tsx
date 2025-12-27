import { Link as RouterLink } from '@tanstack/react-router'

import { Link } from '#/components/ui'
import { css } from '#/styled-system/css'

import type { LinkProps } from '@tanstack/react-router'
import type { FC } from 'react'

type HeaderLinkProps = Pick<LinkProps, 'children' | 'to'>

export const HeaderLink: FC<HeaderLinkProps> = ({ children, to }) => {
	return (
		<Link asChild>
			<RouterLink
				to={to}
				activeProps={{
					className: css({
						textDecorationLine: 'underline',
						textDecorationColor: 'colorPalette.surface.fg/60',
					}),
				}}
				className={css({
					fontSize: 'lg',
					p: '1',
					_hover: {
						textDecorationColor: 'colorPalette.surface.border.hover',
						bgColor: 'accent.plain.bg.hover',
						rounded: 'sm',
					},
				})}
			>
				{children}
			</RouterLink>
		</Link>
	)
}
