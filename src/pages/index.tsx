/* @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx, keyframes } from "@emotion/core"

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
  IconButton,
} from "@chakra-ui/core"

import {
  FiChevronsRight,
  FiTwitter,
  FiHeart,
  FiGithub,
  FiMail,
  FiCpu,
  FiImage,
  FiUser,
  FiSearch,
} from "react-icons/fi"
import { MdCopyright } from "react-icons/md"
import { IoMdHand } from "react-icons/io"

import Layout from "../components/layout"
import Header from "../components/header"

const Hero = () => {
  return (
    <Box bg="gray.800">
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
            templateColumns={["1fr", "1fr 2fr"]}
          >
            <Box gridArea="title">
              <Heading as={Link} size="2xl" mb={["0", "4"]}>
                My case for Elm
              </Heading>
            </Box>

            <Text
              fontFamily="heading"
              fontWeight="600"
              fontSize="sm"
              color="gray.400"
              mb="2"
              gridArea="subheader"
            >
              Latest Post
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
                03.23.20
              </Text>
            </Box>

            <Box
              height="32"
              overflow="hidden"
              position="relative"
              gridArea="preview"
            >
              <Text fontWeight="bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis dolorum eos cupiditate recusandae ipsa suscipit veniam
                quis quibusdam, sit sed velit accusamus. Commodi dolorem
                perspiciatis, tempora ex est perferendis dolore. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Illo, quos et
                corporis sed expedita nobis earum obcaecati nihil iure dolore
                eaque quo, nesciunt rerum perspiciatis at. Magni earum vel
                voluptatibus!
                <Box
                  position="absolute"
                  width="calc(100% + 10px)"
                  height="20"
                  bottom="0"
                  left="-5px"
                  background="linear-gradient(#1A202C00, #1A202C)"
                />
              </Text>
            </Box>

            <Box
              borderTop="1px"
              borderColor="white"
              pt="4"
              gridArea="cta"
              mt={[5, 0]}
            >
              <Link to="/">
                <ChakraLink
                  fontFamily="heading"
                  fontWeight="600"
                  _hover={{
                    "&:hover > .icon": {
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

const Post = props => {
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
          My case for Elm: Extended Edition, Part III
        </Heading>

        <Text
          fontSize="sm"
          color="gray.600"
          fontFamily="heading"
          gridArea="meta"
          justifySelf={["flex-start", "flex-end"]}
          textAlign={["left", "right"]}
          pr="6"
        >
          03.23.20
          <br />3 minute read
          <Stack isInline flexWrap="wrap" justify="flex-end" mt="2">
            <Badge variant="outline" variantColor="green">
              Elm
            </Badge>
            <Badge variant="outline" variantColor="orange">
              Process
            </Badge>
          </Stack>
        </Text>

        <Box
          gridArea="preview"
          borderLeft={["none", "1px"]}
          borderColor={[null, "gray.300"]}
          pl={[0, "6"]}
        >
          <Box height="32" overflow="hidden" position="relative">
            <Text fontWeight="bold" color="gray.700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              dolorum eos cupiditate recusandae ipsa suscipit veniam quis
              quibusdam, sit sed velit accusamus. Commodi dolorem perspiciatis,
              tempora ex est perferendis dolore. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Illo, quos et corporis sed expedita
              nobis earum obcaecati nihil iure dolore eaque quo, nesciunt rerum
              perspiciatis at. Magni earum vel voluptatibus! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Deserunt, laborum
              perferendis dolorem ipsa impedit eligendi rem, assumenda sint
              laboriosam possimus asperiores, vero enim qui expedita voluptates
              in illo? Corrupti, sunt?
              <Box
                position="absolute"
                width="calc(100% + 10px)"
                height="20"
                bottom="0"
                left="-5px"
                background="linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1))"
              />
            </Text>
          </Box>

          <Box gridArea="cta" mt={3}>
            <Link to="/">
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

const Latest = () => {
  return (
    <Box maxW="containers.lg" px="6" mx="auto" pt="16" pb="24">
      <Heading as="h2" size="xl" mb="10">
        Recent Posts
      </Heading>

      <Stack spacing="20">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
    </Box>
  )
}

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

const Bold = props => <Text d="inline" fontWeight="bold" {...props} />

const Footer = () => {
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
              icon={FiTwitter}
              size="lg"
              variant="ghost"
              rounded="full"
              _hover={{ color: "blue.400", bg: "white" }}
              _focus={{ boxShadow: "0 0 0 2px white" }}
              aria-label="Link to my Twitter"
            />

            <IconButton
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
            Fargo, ND.
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
          <Text id="contact">
            <Icon as={FiMail} mr="1" />
            <Bold>Contact</Bold>
            <br />
            Drop me a line at <Bold>adrian.aleixandre@gmail.com</Bold> or on
            Twitter{" "}
            <ChakraLink
              textDecoration="underline"
              isExternal
              href="https://twitter.com/_aaleixandre"
              aria-label="Link to my twitter page @_aaleixandre"
            >
              <Icon as={FiTwitter} mr="1" />
              @_aaleixandre
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

const IndexPage = () => (
  <Layout>
    <Header />
    <Hero />
    <Latest />
    <Footer />
  </Layout>
)

export default IndexPage
