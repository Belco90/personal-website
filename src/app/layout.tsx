import { type FC, type ReactNode } from 'react'

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
)

export default RootLayout
