import Script from 'next/script'

export function PirschAnalytics() {
	return (
		<Script
			defer
			src="https://api.pirsch.io/pa.js"
			id="pianjs"
			data-code={process.env.NEXT_PUBLIC_PIRSCH_ID_CODE}
		/>
	)
}
