import { css } from '#/styled-system/css'

import type { FC } from 'react'

import { Link } from '@tanstack/react-router'
import type { LinkProps } from '@tanstack/react-router'

type HeaderLinkProps = Pick<LinkProps, 'children' | 'to'>

export const HeaderLink: FC<HeaderLinkProps> = ({ children, to }) => {
	return (
		<Link
			to={to}
			activeProps={{
				className: css({
					textDecorationLine: 'underline',
					textDecorationColor: { base: 'primary.600', _dark: 'primary.300' },
					color: { base: 'primary.600', _dark: 'primary.300' },
				}),
			}}
			inactiveProps={{
				className: css({ color: { base: 'gray.700', _dark: 'gray.200' } }),
			}}
			className={css({
				textDecorationThickness: '2px',
				textUnderlineOffset: '2px',
				fontSize: 'lg',
				p: '1',
				_hover: {
					color: 'primary.700',
					textDecorationColor: 'current',
					bgColor: 'primary.100',
					rounded: 'sm',
				},
			})}
		>
			{children}
		</Link>
	)
}
