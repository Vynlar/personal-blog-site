/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Failed to create blog posts")
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }) => {
    actions.createPage({
      path: `/post/${node.frontmatter.slug}`,
      component: path.resolve(`./src/components/post.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
