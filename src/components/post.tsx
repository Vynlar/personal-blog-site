import React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Link,
  Divider,
  BoxProps,
  LinkProps,
  ImageProps,
  Grid,
  Stack,
  Flex,
  useTheme,
  Badge,
} from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import Header from "./header"
import Footer from "./footer"
import { getColorByIndex } from "../utils/color"

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
  a: (props: LinkProps) => <Link color="orange.700" {...props} />,
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
}

const Post = ({ data: { mdx } }) => {
  return (
    <Layout>
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
            size={mdx.frontmatter.title.length > 40 ? "xl" : "2xl"}
            gridArea="title"
          >
            {mdx.frontmatter.title}
          </Heading>

          <Flex direction="column" gridArea="meta" align={[null, "flex-end"]}>
            <Text color="gray.800">
              {mdx.timeToRead} minute{mdx.timeToRead > 1 ? "s" : ""} to read
            </Text>
            <Text color="gray.800">{mdx.frontmatter.published}</Text>
            <Flex
              flexDirection={["row", "row-reverse"]}
              mt="2"
              flexWrap="wrap"
              align="flex-start"
              justify="flex-start"
            >
              {mdx.frontmatter.tags.map((tag, index) => {
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
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        published(formatString: "MM.DD.YYYY")
        tags
      }
    }
  }
`

export default Post
