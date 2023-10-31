'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { type FC, type ReactNode } from 'react'

import { css } from '@/styled-system/css'

type HeaderLinkProps = Pick<LinkProps, 'href'> & { children: ReactNode }

const HeaderLink: FC<HeaderLinkProps> = ({ children, href }) => {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link
			href={href}
			aria-current={isActive ? 'page' : undefined}
			className={css({
				textDecorationLine: isActive ? 'underline' : 'none',
				textDecorationColor: isActive
					? { base: 'primary.600', _dark: 'primary.300' }
					: undefined,
				textDecorationThickness: '2px',
				textUnderlineOffset: '2px',
				color: isActive
					? { base: 'primary.600', _dark: 'primary.300' }
					: { base: 'gray.700', _dark: 'gray.200' },
				fontSize: 'lg',
				p: '1',
				_hover: {
					color: 'primary.700',
					textDecorationColor: 'current',
					bgColor: 'primary.100',
					borderRadius: 'sm',
				},
			})}
		>
			{children}
		</Link>
	)
}

export default HeaderLink
