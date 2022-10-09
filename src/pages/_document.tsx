import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

interface GoatCounterSettings {
	no_onload: boolean
	allow_local: boolean
}

// Add "allow_local": true and disable the production check in useGoatCounter
// to test in local env.
const goatCounterSettings: Partial<GoatCounterSettings> = {
	// This is false so the first page accessed gets reported here,
	// and sequent page navigation are reported by useGoatCount hook.
	no_onload: false,
}

const dataGoatCounterSettings = JSON.stringify(goatCounterSettings)

export const MyDocument = () => {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
				/>
				<script
					data-goatcounter="https://belco.goatcounter.com/count"
					data-goatcounter-settings={dataGoatCounterSettings}
					async
					src="/scripts/goat-counter.js"
				/>
			</Head>
			<body>
				<ColorModeScript />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default MyDocument
