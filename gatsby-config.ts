import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = require('./site-metadata.json')

const config: GatsbyConfig = {
  siteMetadata: siteMetadata,
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-remark-page-creator",
    "gatsby-source-data",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
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
      resolve: `gatsby-plugin-static-cms`,
      options: {
        enableIdentityWidget: true,
        htmlTitle: `Content Manager`,
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

export default config;
