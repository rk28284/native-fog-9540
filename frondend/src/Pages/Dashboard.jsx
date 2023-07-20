import { Box, Button, Flex, HStack, Img, Input, Link, Text, textDecoration, VStack } from '@chakra-ui/react'
import React from 'react'

export const Dashboard = () => {

  const data = [
    { repo: "reposiratory  1" },
    { repo: "reposiratory  2" },
    { repo: "reposiratory  3" },
    { repo: "reposiratory  4" },
    { repo: "reposiratory  5" }
  ]
  return (
    <Flex justifyContent="space-between">
      <VStack width="30%" alignItems="flex-start" paddingLeft="50px" overflowY="scroll">
        <Text>Username</Text>
        <Box backgroundColor="gray" height="1px"></Box>
        <Flex width="70%" justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Top Repositories</Text>
          <Button cursor="pointer" fontWeight="bold" borderRadius="7px" color="white" bgColor="rgb(31, 136, 61)" width="50px" height="30px">New</Button>
        </Flex>
        <Input height="30px" width="70%" borderRadius="7px" placeholder='Find a reposiratory...'></Input>
        <VStack>
          {data?.map((ele) => {
            return <Link href='#' textDecoration="none">{ele.repo}</Link>
          })}
        </VStack>
      </VStack>
      <Box width="65%">
        <Img width="100%" src='https://i.ibb.co/TqWkzxL/github-dashboard.jpg'></Img>
      </Box>
    </Flex>
  )
}
