require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: process.env.COSMIC_BUCKET_SLUG, // Get this value in Bucket > Settings
        objectTypes: [
          `pages`,
          'ctas',
          'testimonials'
        ],
        apiAccess: {
          read_key: process.env.COSMIC_API_KEY, // Get this value in Bucket > Settings
        },
        localMedia: true // Download media locally for gatsby image (optional)
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-codegen',
      options: {
        watch: false
      },
    },
  ],
}
