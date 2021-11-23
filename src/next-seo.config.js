const description = 'Mario Beltrán - Frontend Software Engineer'

const nextSeoConfig = {
  titleTemplate: '%s | Mario Beltrán',
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
    site_name: 'Mario Beltrán',
  },
  twitter: {
    handle: '@belcoDev',
    cardType: 'summary',
    site: '@belcoDev',
  },
}

export default nextSeoConfig
