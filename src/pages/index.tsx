/* @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { jsx } from "@emotion/core"

import {
  Heading,
  Box,
  Flex,
  Stack,
  Text,
  Link as ChakraLink,
  Icon,
  Grid,
  Badge,
} from "@chakra-ui/core"

import { FiChevronsRight, FiStar } from "react-icons/fi"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { getColorByIndex } from "../utils/color"

const Background = props => {
  return (
    <Box
      css={{
        maskImage:
          "linear-gradient(to bottom right, transparent 50%, black 100%)",
      }}
      background={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.07'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      {...props}
    />
  )
}

const Hero = ({ post }) => {
  return (
    <Box bg="gray.800" position="relative">
      <Background
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        css={{
          maskImage:
            "linear-gradient(to bottom right, black 0%, transparent 50%, black 100%)",
        }}
      />
      <Flex
        minHeight={["lg", null, "xl"]}
        align="center"
        maxW="containers.lg"
        py="10"
        px="6"
        mx="auto"
        color="white"
      >
        <Box transform={["none", "translateY(-15px)"]}>
          <Grid
            templateAreas={[
              `"subheader" "title" "date" "preview" "cta"`,
              `"subheader ." "title preview" "date cta"`,
            ]}
            columnGap="10"
            templateRows={["auto", "auto minmax(170px, 1fr)"]}
            templateColumns={["1fr", "4fr 5fr"]}
          >
            <Box gridArea="title">
              <Heading
                as={Link}
                d="block"
                to={`/post/${post.frontmatter.slug}`}
                size={post.frontmatter.title.length > 40 ? "xl" : "2xl"}
                mb={["0", "4"]}
              >
                {post.frontmatter.title}
              </Heading>
            </Box>

            <Text
              d="flex"
              alignItems="center"
              fontFamily="heading"
              fontWeight="600"
              fontSize="sm"
              color="gray.400"
              mb="2"
              gridArea="subheader"
            >
              <Icon as={FiStar} mr="1" color="yellow.300" opacity={0.6} />
              Featured Post
            </Text>

            <Box gridArea="date" alignSelf="flex-end" my={[4, 0]}>
              <Box
                display={["none", "block"]}
                height="1px"
                bg="white"
                width="32"
                mb="4"
              />
              <Text fontWeight="600" fontFamily="heading">
                {post.frontmatter.published}
              </Text>
            </Box>

            <Box
              maxHeight="32"
              overflow="hidden"
              position="relative"
              gridArea="preview"
              css={{
                maskImage:
                  "linear-gradient(to bottom, black 30%, transparent 100%)",
              }}
            >
              <Text>{post.excerpt}</Text>
            </Box>

            <Box
              borderTop="1px"
              borderColor="white"
              pt="4"
              gridArea="cta"
              mt={[5, 0]}
            >
              <Link to={`/post/${post.frontmatter.slug}`}>
                <ChakraLink
                  as="span"
                  fontFamily="heading"
                  fontWeight="600"
                  _hover={{
                    "& > .icon": {
                      transform: "translate(4px, -1px)",
                    },
                  }}
                >
                  Read more
                  <Icon
                    ml="1"
                    transition="transform 0.2s"
                    transform="translateY(-1px)"
                    className="icon"
                    as={FiChevronsRight}
                  />
                </ChakraLink>
              </Link>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Box>
  )
}

const Post = ({ post, ...props }) => {
  return (
    <Stack spacing="10" {...props}>
      <Grid
        templateAreas={[
          `"title" "meta" "preview"`,
          `
            ". title"
            "meta preview"
          `,
        ]}
        rowGap="4"
        templateColumns={["1fr", "1fr 3fr"]}
      >
        <Heading as="h3" size="lg" gridArea="title" pl={[0, "6"]}>
          <Link to={`/post/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </Heading>

        <Text
          as="div"
          fontSize="sm"
          color="gray.600"
          fontFamily="heading"
          gridArea="meta"
          justifySelf={["flex-start", "flex-end"]}
          textAlign={["left", "right"]}
          pr="6"
        >
          {post.frontmatter.published}
          <br />
          {post.timeToRead} minutes to read
          <Flex
            flexDirection={["row", "row-reverse"]}
            mt="2"
            flexWrap="wrap"
            align="flex-start"
            justify="flex-start"
          >
            {post.frontmatter.tags.map((tag, index) => {
              return (
                <Badge
                  fontFamily="heading"
                  variant="outline"
                  variantColor={getColorByIndex(index)}
                  mb="2"
                  ml={[null, "2"]}
                  mr={["2", 0]}
                >
                  {tag}
                </Badge>
              )
            })}
          </Flex>
        </Text>

        <Box
          gridArea="preview"
          borderLeft={["none", "1px"]}
          borderColor={[null, "gray.300"]}
          pl={[0, "6"]}
        >
          <Box
            maxHeight="32"
            overflow="hidden"
            css={{
              maskImage:
                "linear-gradient(to bottom, black 30%, transparent 100%)",
            }}
          >
            <Text color="gray.700">{post.excerpt}</Text>
          </Box>

          <Box gridArea="cta" mt={3}>
            <Link to={`/post/${post.frontmatter.slug}`}>
              <ChakraLink
                fontFamily="heading"
                fontWeight="600"
                _focus={{
                  boxShadow: "outline",
                }}
                _hover={{
                  color: "orange.500",
                  "& > .icon": {
                    transform: "translate(4px, -1px)",
                    color: "orange.500",
                  },
                }}
              >
                Read more
                <Icon
                  ml="1"
                  transition="transform 0.2s"
                  transform="translateY(-1px)"
                  className="icon"
                  as={FiChevronsRight}
                />
              </ChakraLink>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Stack>
  )
}

const Latest = ({ posts }) => {
  return (
    <Box maxW="containers.lg" px="6" mx="auto" pt="16" pb="24">
      <Heading as="h2" size="xl" mb="10">
        Recent Posts
      </Heading>

      <Stack spacing="20">
        {posts.map(post => (
          <Post post={post} />
        ))}
      </Stack>
    </Box>
  )
}

const IndexPage = ({ data: { featured, latest } }) => {
  const featuredPost = featured.edges[0].node
  const latestPosts = latest.edges
    .map(({ node }) => node)
    .filter(({ id }) => id !== featuredPost.id)
    .slice(0, 3)

  return (
    <Layout>
      <SEO title="Adrian Aleixandre" />
      <Header />
      <Hero post={featuredPost} />
      <Latest posts={latestPosts} />
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    featured: allMdx(
      limit: 1
      sort: { fields: frontmatter___published, order: DESC }
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          ...PostData
        }
      }
    }
    latest: allMdx(
      limit: 4
      sort: { fields: frontmatter___published, order: DESC }
    ) {
      edges {
        node {
          ...PostData
        }
      }
    }
  }
  fragment PostData on Mdx {
    id
    body
    timeToRead
    excerpt(pruneLength: 500)
    frontmatter {
      slug
      title
      published(formatString: "MM.DD.YYYY")
      tags
    }
  }
`

export default IndexPage
