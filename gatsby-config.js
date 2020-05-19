module.exports = {
  siteMetadata: {
    title: `Mario Beltrán Alarcón`,
    description: `Mario Beltrán Alarcón - Frontend Web Engineer`,
    author: `Mario Beltrán Alarcón`,
    twitter: `@belco90`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
  ],
};
