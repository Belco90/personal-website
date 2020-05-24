const SITE_URL = 'https://mario.dev';

module.exports = {
  siteMetadata: {
    title: `Mario Beltrán Alarcón`,
    description: `Mario Beltrán Alarcón - Frontend Web Engineer`,
    author: `Mario Beltrán Alarcón`,
    email: `belco90@gmail.com`,
    twitter: `belcoDev`,
    github: `Belco90`,
    linkedin: `mario-ba-90`,
    siteUrl: SITE_URL,
    profilePicture: `https://en.gravatar.com/userimage/2579648/589fd5525e1be579480a610887aa79df.png?size=200`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mario-beltran-dev`,
        short_name: `mario-dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/profile-picture.jpg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-layout',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: SITE_URL,
      },
    },
  ],
};
