/* @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import {
  Box,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Link as ChakraLink,
  Divider,
  BoxProps,
  LinkProps,
  ImageProps,
  Grid,
  Flex,
  Badge,
  Tooltip,
  Icon,
  PseudoBox,
  Stack,
} from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import { getColorByIndex } from "../utils/color"
import {
  FiInfo,
  FiChevronsRight,
  FiBookOpen,
  FiBook,
  FiBookmark,
} from "react-icons/fi"
import { jsx } from "@emotion/core"

const shortcodes = {
  h1: (props: BoxProps) => (
    <Heading {...props} as="h1" size="xl" mt="8" mb="2" />
  ),
  h2: (props: BoxProps) => (
    <Heading {...props} as="h2" size="lg" mt="6" mb="2" />
  ),
  h3: (props: BoxProps) => (
    <Heading {...props} as="h3" size="md" mt="4" mb="1" />
  ),
  h4: (props: BoxProps) => (
    <Heading {...props} as="h4" size="sm" mt="3" mb="1" />
  ),
  h5: (props: BoxProps) => (
    <Heading {...props} as="h5" size="xs" mt="2" mb="1" />
  ),
  h6: (props: BoxProps) => <Heading {...props} as="h6" size="xs" mt="1" />,
  p: (props: BoxProps) => <Text mb="4" fontSize="lg" {...props} />,
  ul: (props: BoxProps) => (
    <List my="4" styleType="disc" spacing="3" {...props} />
  ),
  ol: (props: BoxProps) => (
    <List my="4" styleType="decimal" spacing="3" {...props} />
  ),
  li: (props: BoxProps) => <ListItem fontSize="lg" {...props} />,
  a: (props: LinkProps) => <ChakraLink color="orange.700" {...props} />,
  hr: Divider,
  thematicBreak: Divider,
  blockquote: (props: BoxProps) => (
    <Box
      bg="orange.50"
      py="3"
      px="4"
      my="4"
      borderLeft="5px solid"
      borderColor="orange.300"
    >
      <Text {...props} mb="-16px" />
    </Box>
  ),
  image: (props: ImageProps) => <Image maxW="100%" {...props} />,
  table: (props: BoxProps) => (
    <Box
      as="table"
      border="1px solid"
      borderColor="gray.300"
      bg="red.400"
      my="4"
      mx="auto"
      {...props}
    />
  ),
  tr: (props: BoxProps) => <Box as="tr" bg="red" mb="2" {...props} />,
  td: (props: BoxProps) => (
    <Box as="td" bg="gray.50" px="4" py="3" {...props} />
  ),
  th: (props: BoxProps) => (
    <Box
      as="td"
      bg="gray.100"
      px="4"
      py="3"
      fontWeight="bold"
      borderBottom="1px"
      borderColor="gray.300"
      {...props}
    />
  ),
  Tooltip: props => (
    <Tooltip hasArrow {...props}>
      <Box d="inline">
        {props.children} <Icon as={FiInfo} />
      </Box>
    </Tooltip>
  ),
}

const Post = ({ data: { site, post, previousPost, nextPost }, ...rest }) => {
  const imageURL = `${site.siteMetadata.siteUrl}/${post.frontmatter.slug}.png`

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        meta={[
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:image`,
            content: imageURL,
          },
          {
            name: `og:image`,
            content: imageURL,
          },
        ]}
      />
      <Header />
      <Box maxW="containers.lg" px="6" mx="auto" py="16">
        <Grid
          templateAreas={[`"title" "meta" "body"`, `". title" "meta body"`]}
          templateColumns={["minmax(0, 1fr)", "1fr 3fr"]}
          rowGap="6"
          columnGap="12"
        >
          <Heading
            as="h1"
            size={post.frontmatter.title.length > 40 ? "xl" : "2xl"}
            gridArea="title"
          >
            {post.frontmatter.title}
          </Heading>

          <Flex direction="column" gridArea="meta" align={[null, "flex-end"]}>
            <Text color="gray.800">
              {post.timeToRead} minute{post.timeToRead > 1 ? "s" : ""} to read
            </Text>
            <Text color="gray.800">{post.frontmatter.published}</Text>
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
          </Flex>

          <Box
            gridArea="body"
            borderLeftWidth={[null, "1px"]}
            borderColor="gray.300"
            px={[0, "6"]}
            mx={[0, "-24px"]}
          >
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </Box>
        </Grid>
      </Box>
      <Box bg="gray.50">
        <Box maxW="containers.lg" px="6" mx="auto" py="16">
          <Heading as="h2" size="lg" textAlign="center">
            Other Articles You May Enjoy
          </Heading>
          <Stack align="center" mb="6" mt="2">
            <Stack isInline align="center">
              <Box width="16" height="1px" bg="orange.400" />
              <Icon as={FiBookOpen} color="orange.500" size="5" />
              <Box width="16" height="1px" bg="orange.400" />
            </Stack>
          </Stack>

          <Flex
            direction={["column", "row"]}
            mx={["0", "-12px"]}
            align="stretch"
          >
            {[previousPost, nextPost]
              .filter(post => post)
              .map(post => (
                <PseudoBox
                  d="flex"
                  flexDirection="column"
                  maxW={[null, "50%"]}
                  bg="white"
                  mx={["0", "3"]}
                  mt="4"
                  px="5"
                  py="4"
                  flex="1"
                  shadow="lg"
                  border="1px"
                  borderColor="gray.200"
                  rounded="md"
                  position="relative"
                  transition="transform 0.1s"
                  _hover={{
                    borderColor: "orange.400",
                    transform: "translateY(-3px)",
                    "& .icon": {
                      transform: "translateX(4px)",
                    },
                    a: {
                      color: "orange.600",
                    },
                  }}
                >
                  <Heading as="h3" size="sm">
                    {post.frontmatter.title}
                  </Heading>
                  <Text color="gray.700">{post.frontmatter.description}</Text>
                  <Flex justify="space-between" align="baseline" mt="auto">
                    <ChakraLink
                      as={Link}
                      to={`/post/${post.frontmatter.slug}`}
                      textDecoration="underline"
                      color="orange.600"
                    >
                      Read more
                      <Icon
                        transition="transform 0.2s"
                        className="icon"
                        ml="1"
                        as={FiChevronsRight}
                      />
                      <Box
                        as="span"
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="0"
                        right="0"
                        cursor="pointer"
                      />
                    </ChakraLink>
                    <Text as="span" color="gray.600">
                      {post.timeToRead} min. read
                    </Text>
                  </Flex>
                </PseudoBox>
              ))}
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $nextId: String, $previousId: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    previousPost: mdx(id: { eq: $previousId }) {
      id
      timeToRead
      frontmatter {
        title
        description
        slug
      }
    }
    nextPost: mdx(id: { eq: $nextId }) {
      id
      timeToRead
      frontmatter {
        title
        description
        slug
      }
    }
    post: mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        published(formatString: "MM.DD.YYYY")
        tags
        description
        slug
      }
    }
  }
`

export default Post
