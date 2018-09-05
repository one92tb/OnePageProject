module.exports = {
  siteMetadata: {
    title: 'Trucking',
    asd: 'aaahh'
  },
  plugins: [{
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tf67omcacimj`,
        accessToken: `25355cee50fee8d5abc7e5d954279b4de7901e625a79369c5d748ff2a4fcceaf`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ],
}
