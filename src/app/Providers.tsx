'use client'

import { ThemeProvider } from 'next-themes'
import { type FC, type ReactNode } from 'react'

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
