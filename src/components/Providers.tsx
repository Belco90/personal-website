import { ThemeProvider } from '#/components/ThemeProvider'

import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>
}
