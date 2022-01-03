import type { DefaultSeoProps } from 'next-seo'
import { UserConfig } from '~/user.config'

const description = `${UserConfig.author.name} - ${UserConfig.author.position}`

const DefaultSeoConfig: DefaultSeoProps = {
  titleTemplate: `%s | ${UserConfig.author.name}`,
  description,
  openGraph: {
    type: 'website',
    url: 'https://mario.dev',
    title: description,
    images: [
      {
        url: 'https://en.gravatar.com/userimage/2579648/589fd5525e1be579480a610887aa79df.png?size=200',
        width: 200,
        height: 200,
        alt: "Mario's profile picture",
      },
    ],
    site_name: `${UserConfig.author.name}'s website`,
  },
  twitter: {
    handle: '@belcoDev',
    cardType: 'summary',
    site: '@belcoDev',
  },
}

export { DefaultSeoConfig }
