'use client'

import { ColorModeScript } from '@chakra-ui/react'
import { type FC, type ReactNode } from 'react'

import Providers from '~/app/Providers'

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
	<html lang="en">
		<body>
			<ColorModeScript />
			<Providers>{children}</Providers>
		</body>
	</html>
)

export default RootLayout
