module.exports = {
  siteMetadata: {
    title: `Adrian Aleixandre - Developer + Designer`,
    description: `The musings of a front-end developer and designer. Discussion about React, Elm, and other interesting UI/UX topics.`,
    author: `@_aaleixandre`,
    github: "Vynlar",
    email: "adrian.aleixandre@gmail.com",
    siteUrl: `https://adrianaleixandre.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTsx: true,
      },
    },
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
        name: `Adrian Aleixandre`,
        short_name: `AAleixandre`,
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#DD6B20`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-prismjs`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Manuale"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
