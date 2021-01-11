const description = 'Mario Beltrán Alarcón - Frontend Software Engineer'

export default {
  titleTemplate: '%s | Mario Beltrán',
  description,
  openGraph: {
    type: 'website',
    url: 'https://mario.dev',
    title: description,
    images: [
      {
        url:
          'https://en.gravatar.com/userimage/2579648/589fd5525e1be579480a610887aa79df.png?size=200',
        width: 200,
        height: 200,
        alt: "Mario's profile picture",
      },
    ],
    site_name: 'Mario Beltrán Alarcón',
  },
  twitter: {
    handle: '@belcoDev',
    cardType: 'summary',
    site: '@belcoDev',
  },
}
