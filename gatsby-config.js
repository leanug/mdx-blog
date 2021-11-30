module.exports = {
  siteMetadata: {
    author: "Leandro Ubilla Gonzalez",
    description: `Lorem markdownum reprensa dixit gutture divitior resilire vicinos silvae corpora lecto at male.`,
    siteUrl: "https://oneblog.netlify.app",
    title: "OneBlog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100
            },
          },
        ],
      },
    },
  ],
};
