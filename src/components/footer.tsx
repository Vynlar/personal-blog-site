/* @jsx jsx */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx, keyframes } from "@emotion/core"

import {
  FiTwitter,
  FiHeart,
  FiGithub,
  FiMail,
  FiCpu,
  FiImage,
  FiUser,
} from "react-icons/fi"
import { MdCopyright } from "react-icons/md"
import { IoMdHand } from "react-icons/io"
import {
  Icon,
  Link as ChakraLink,
  Text,
  Box,
  Stack,
  Flex,
  Heading,
  IconButton,
} from "@chakra-ui/core"

const waveAnimation = keyframes({
  from: {
    transform:
      "rotate(15deg) translateX(-5px) translate(-40px, -30px) scaleX(-1) scale(0.8)",
  },
  to: {
    transform:
      "rotate(45deg) translate(5px, 20px) translate(-40px, -30px) scaleX(-1) scale(0.8)",
  },
})

const Bold = props => <Text as="span" fontWeight="bold" {...props} />

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterMetaQuery {
      site {
        siteMetadata {
          email
          author
          github
        }
      }
    }
  `)
  const { email, author, github } = data.site.siteMetadata

  return (
    <Box bg="orange.500" py="16" color="white">
      <Stack maxW="containers.lg" mx="auto" px="6" spacing="6">
        <Flex direction="row" align="center" flexWrap="wrap">
          <Heading size="xl" my="0">
            Hello!
            <Box
              ml="3"
              mt="-5px"
              d="inline"
              as={IoMdHand}
              animation={`${waveAnimation} 1s ease-in-out infinite alternate`}
              transformOrigin="bottom center"
            />
          </Heading>

          <Stack isInline flex="1" justify="flex-end" spacing="2">
            <IconButton
              as="a"
              target="_blank"
              href={`https://twitter.com/${author}`}
              icon={FiTwitter}
              size="lg"
              variant="ghost"
              rounded="full"
              _hover={{ color: "blue.400", bg: "white" }}
              _focus={{ boxShadow: "0 0 0 2px white" }}
              aria-label="Link to my Twitter"
            />

            <IconButton
              as="a"
              target="_blank"
              href={`https://github.com/${github}`}
              icon={FiGithub}
              size="lg"
              variant="ghost"
              rounded="full"
              _hover={{ color: "gray.600", bg: "white" }}
              _focus={{ boxShadow: "0 0 0 2px white" }}
              aria-label="Link to my GitHub"
            />
          </Stack>
        </Flex>

        <Stack spacing="4" maxW={[null, "sm"]}>
          <Text>
            <Icon as={FiUser} mr="1" />
            <Bold>About me</Bold>
            <br />
            I'm <Bold>Adrian Aleixandre</Bold>, an engineer and designer in
            Fargo, ND. Right now I'm building web apps at{" "}
            <ChakraLink
              textDecoration="underline"
              isExternal
              href="https://bushelpowered.com"
            >
              Bushel
            </ChakraLink>
            .
          </Text>
          <Text>
            <Icon as={FiImage} mr="1" />
            <Bold>My vision</Bold>
            <br />I am passionate about building UX-research backed products in
            autonomous cross-functional teams.
          </Text>
          <Text>
            <Icon as={FiCpu} mr="1" />
            <Bold>Interests</Bold>
            <br />
            My favorite technical tools are <Bold>React, Elm, and Elixir</Bold>.
            I love me a steaming latte or a milk stout.
          </Text>
          <Text>
            <Icon as={FiMail} mr="1" />
            <Bold>Contact</Bold>
            <br />
            Drop me a line at{" "}
            <ChakraLink href={`mailto:${email}`} fontWeight="bold">
              {email}
            </ChakraLink>{" "}
            or on Twitter{" "}
            <ChakraLink
              textDecoration="underline"
              isExternal
              href={`https://twitter.com/${author}`}
              aria-label={`Link to my twitter page ${author}`}
            >
              <Icon as={FiTwitter} mr="1" />
              {author}
            </ChakraLink>
          </Text>
        </Stack>
        <Flex align="center" flexWrap="wrap">
          <Stack>
            <Box width="32" height="1px" bg="white" />
            <Text fontFamily="body" fontWeight="500">
              <Icon
                transform="translateY(-2px)"
                color="white"
                as={MdCopyright}
              />{" "}
              Adrian Aleixandre &bull; {new Date().getFullYear()}
            </Text>
          </Stack>

          <Text
            ml={[null, "auto"]}
            px="3"
            py="1"
            bg="gray.800"
            transform={[
              null,
              "skew(0deg) rotate3d(0, 1, 0, 15deg) rotate3d(1, 0, 0, 0deg) rotate3d(0, 0, 1, -4deg) translateY(3px)",
            ]}
            css={{ perspective: "100px" }}
            shadow="3px 4px 0 rgba(0,0,0,0.3), -3px -4px 0 rgba(255,255,255,0.1)"
            mt={[8, 0]}
          >
            Made with{" "}
            <Icon
              aria-label="love"
              transform="translateY(-1px)"
              color="red.400"
              as={FiHeart}
            />{" "}
            in Fargo, ND
          </Text>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Footer
