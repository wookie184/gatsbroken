const remarkmath = import(`remark-math`)
const rehypekatex = import(`rehype-katex`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [remarkmath],
        rehypePlugins: [rehypekatex],
      }
    }
  ]
}