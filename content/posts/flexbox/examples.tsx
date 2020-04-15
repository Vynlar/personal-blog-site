import React from "react"
import { Stack, Box } from "@chakra-ui/core"

export const Bit = props => (
  <Box
    width="10"
    height="10"
    rounded="md"
    bg="orange.500"
    border="1px"
    borderColor="orange.700"
    {...props}
  />
)

export const FlexBox = props => {
  return (
    <Stack
      direction="row"
      border="1px"
      borderColor="gray.500"
      p="4"
      maxW="sm"
      {...props}
    />
  )
}
