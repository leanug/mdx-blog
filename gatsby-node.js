const path = require('path') /* full path required path.resolve en createpage */

/* Create pages dynamically */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        categories: distinct(field: frontmatter___category)
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
         distinct(field: frontmatter___category)
      }
    }
  `)
  
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: { slug },
    })
  })

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/categories/${ category.replace(' ', '-') }`,
      component: path.resolve(`src/templates/category-template.js`),
      context: { category },
    })
  })
}
