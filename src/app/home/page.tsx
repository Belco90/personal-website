import { type FC } from 'react'

import { css } from '@/styled-system/css'

const HomePage: FC = () => {
	return (
		<div
			className={css({
				fontSize: '2xl',
				fontWeight: 'bold',
				color: 'amber.600',
			})}
		>
			Hello 🐼!
		</div>
	)
}

export default HomePage
