import React from 'react'
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"
export const Repo = () => {
  return (
    <Box fontFamily="-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif" textAlign="start" width="50%" margin="auto">
      <Heading>Create a new repository</Heading>
      <Text fontSize="15px" color="gray">A repository contains all project files, including the revision history. Already have a project repository elsewhere? Import a repository.</Text>
      <hr></hr>
      <Text fontStyle="italic">Required fields are marked with an asterisk (*).</Text>
      <Flex width="50%" justifyContent="space-between">
        <Box >
          <Text fontWeight="bold">Owner *</Text>
          <select style={{ height: "29px", width: "150px", borderRadius: "7px" }} name='choose an owner'>
            <option>Choose an owner</option>
            <option>1</option>
            <option>2</option>
          </select>
        </Box>
        <Box>
          <Text fontWeight="bold">Repository name *</Text>
          <Input width="200px" borderRadius="7px" h="25px" type="text"></Input>
        </Box>
      </Flex>
      <Text>Great repository names are short and memorable. Need inspiration?</Text>
      <Text fontWeight="bold">Description <span style={{ fontWeight: "normal" }}>(optional)</span></Text>
      <Input borderRadius="7px" h="35px" width="98%"></Input>
      <hr />
      <Box borderRadius="7px" padding="16px" backgroundColor="rgb(221, 244, 255)" border="solid 1px" borderColor="rgba(84, 174, 255, 0.4)"><InfoOutlineIcon color="blue" w="20px" marginRight="25px" />Please choose an owner to see the available visibility options.</Box>
      <hr />
      <Text fontWeight="bold">Initialize this repository with:</Text>

      <input type="checkbox"></input>
      <label fontWeight="bold">Add a README file
      </label>
      <Text fontSize="15px" color="gray">This is where you can write a long description for your project. Learn more about READMEs.</Text>
      <br />
      <Text fontWeight="bold">Add .gitignore</Text>
      <select style={{ height: "29px", width: "170px", borderRadius: "7px" }}>
        <option>.gitignore template:None</option>
      </select>
      <Text fontSize="15px" color="gray">Choose which files not to track from a list of templates. Learn more about ignoring files.</Text>
      <br />
      <Text fontWeight="bold">Choose a license</Text>
      <select style={{ height: "29px", width: "105px", borderRadius: "7px" }}>
        <option>License:None</option>
      </select>
      <Text fontSize="15px" color="gray">A license tells others what they can and can't do with your code. Learn more about licenses.</Text>
      <hr />
      <Flex justifyContent="flex-end">
        <Button fontSize="18px" fontWeight="bold" borderRadius="7px" cursor="pointer" w="180px" h="30px" backgroundColor="rgb(31, 136, 61)" color="white" variant="outline">Create repository</Button>
      </Flex>
      <br />
      <br />
      <hr />
    </Box>
  )
}
