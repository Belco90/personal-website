module.exports = {
  siteMetadata: {
    title: `Mario Beltrán Alarcón`,
    description: `Mario Beltrán Alarcón Personal Website`,
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
        background_color: `#1b1f22`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/avatar.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-chakra-ui',
  ],
};
