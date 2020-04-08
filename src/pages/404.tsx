import React from "react"
import {
  Heading,
  Flex,
  Text,
  Box,
  Icon,
  Grid,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/core"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FiSearch, FiMail, FiTwitter } from "react-icons/fi"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundMetaQuery {
      site {
        siteMetadata {
          email
          author
        }
      }
    }
  `)
  const { email, author } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Flex
        width="100vw"
        height="100vh"
        align="center"
        justify="center"
        bg="gray.800"
        color="white"
      >
        <Grid
          templateAreas={`"icon title" ". message" ". button"`}
          columnGap="3"
          rowGap="3"
        >
          <Icon size="8" as={FiSearch} gridArea="icon" alignSelf="center" />
          <Heading gridArea="title" alignSelf="center" lineHeight="1">
            Oh No!
          </Heading>
          <Text gridArea="message">
            I seem to have lost the page you're looking for.
            <br />
            Let me know what you were after at{" "}
            <ChakraLink
              textDecoration="underline"
              isExternal
              href={`mailto:${email}`}
            >
              <Icon as={FiMail} /> {email}
            </ChakraLink>{" "}
            or{" "}
            <ChakraLink
              textDecoration="underline"
              isExternal
              href={`https://twitter.com/${author}`}
            >
              <Icon as={FiTwitter} /> {author}
            </ChakraLink>
          </Text>
          <Button
            as={Link}
            variant="solid"
            variantColor="blue"
            fontFamily="heading"
            gridArea="button"
            justifySelf="flex-start"
          >
            Home
          </Button>
        </Grid>
      </Flex>
    </Layout>
  )
}

export default NotFoundPage
