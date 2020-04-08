/* @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import { FiTwitter, FiGithub } from "react-icons/fi"
import smallLogo from "../images/small_logo.svg"

import {
  Heading,
  Flex,
  Box,
  Link as ChakraLink,
  IconButton,
  Stack,
  Image,
  PseudoBox,
} from "@chakra-ui/core"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box bg="gray.900">
      <Flex
        as="header"
        height="16"
        align="center"
        justify={["center", "fles-start"]}
        color="white"
        px="6"
        maxW="containers.lg"
        mx="auto"
      >
        <PseudoBox
          css={{
            "&:focus-within .text": {
              color: "red.400",
            },
          }}
        >
          <Link to="/">
            <Stack isInline align="center" spacing="3">
              <Image size="8" src={smallLogo} />

              <Heading
                display={["none", "block"]}
                as="h1"
                size="sm"
                transition="color 0.2s"
                className="text"
              >
                {data.site.siteMetadata.title}
              </Heading>
            </Stack>
          </Link>
        </PseudoBox>

        <Stack
          display={["none", "block"]}
          isInline
          ml="auto"
          align="center"
          spacing="5"
        >
          <ChakraLink href="#contact" fontWeight="600" fontFamily="heading">
            About
          </ChakraLink>

          <IconButton
            aria-label="Go to my Twitter"
            rounded="full"
            as={Link}
            icon={FiTwitter}
            color="black"
            _focus={{ bg: "blue.200", boxShadow: "outline" }}
            _hover={{ bg: "blue.500", color: "white" }}
            _active={{ bg: "blue.700" }}
          />

          <IconButton
            aria-label="Go to my GitHub"
            rounded="full"
            as={Link}
            icon={FiGithub}
            color="black"
            _hover={{ bg: "gray.600", color: "white" }}
            _focus={{ bg: "gray.200", boxShadow: "outline" }}
            _active={{ bg: "gray.800" }}
          />
        </Stack>
      </Flex>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
