import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `mg2 Studio`,
    siteUrl: `https://www.mg2studio.it`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-netlify-cms"]
};

export default config;
