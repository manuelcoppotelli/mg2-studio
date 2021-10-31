require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = require('./site-metadata.json')

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-remark-page-creator",
    "gatsby-source-data",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
        background_color: "#ffffff",
        theme_color: "#ffffff",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers.
        allPageHeaders: [], // option to add headers for all pages.
        mergeSecurityHeaders: true, // turn off the default security headers
        mergeLinkHeaders: true, // turn off the default gatsby js headers
        mergeCachingHeaders: true, // turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path
        generateMatchPathRewrites: true, // turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
  }
};
