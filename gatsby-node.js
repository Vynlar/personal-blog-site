/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___published, order: DESC }) {
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

  posts.forEach(({ node }, index) => {
    const previousPost = posts[index - 1]
    const nextPost = posts[index + 1]

    actions.createPage({
      path: `/post/${node.frontmatter.slug}`,
      component: path.resolve(`./src/components/post.tsx`),
      context: {
        id: node.id,
        previousId: previousPost ? previousPost.node.id : null,
        nextId: nextPost ? nextPost.node.id : null,
      },
    })
  })
}
