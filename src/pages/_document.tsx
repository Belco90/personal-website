import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export const MyDocument = () => {
	return (
		<Html lang="en">
			<Head />
			<body>
				<ColorModeScript />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default MyDocument
