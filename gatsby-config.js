const config = require('./src/config');
const profile = require('./src/profile.json');
module.exports = {
  siteMetadata: {
    title: profile.name,
    description: profile.intro,
    siteUrl: process.env.SITE_URL || 'https://taozheli.github.io',
    image: '/og.png',
    twitterUsername: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: profile.name,
        short_name: profile.name,
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
  ],
};
