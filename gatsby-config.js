module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog'
      }
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-transformer-remark'

  ],
}
