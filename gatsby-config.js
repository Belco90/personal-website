module.exports = {
  siteMetadata: {
    title: `Mario Personal Website`,
    description: `Mario Beltrán Alarcón Personal Website`,
    author: `Mario Beltrán Alarcón`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1b1f22`,
        theme_color: `#1b1f22`,
        display: `minimal-ui`,
      },
    },
  ],
};
