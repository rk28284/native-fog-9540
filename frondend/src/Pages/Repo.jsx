import React from 'react'
import { Box, Button, Checkbox, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"
import { useState } from 'react'
import axios from "axios"
export const Repo = () => {

  const [name, setName] = useState("");

  const handlsubmit = () => {

    let obj = {
      name
    }
    console.log(localStorage.getItem("token"))
    fetch(`https://code-collab-backend-ptyi.onrender.com/repos/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(obj),
    }).then((res) => res.json()).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })

  }
  return (
    <Box fontFamily="-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif" textAlign="start" width="50%" margin="auto">
      <Heading>Create a new repository</Heading>
      <br />
      <Text fontSize="15px" color="gray">A repository contains all project files, including the revision history. Already have a project repository elsewhere? Import a repository.</Text>
      <br />
      <hr></hr>
      <br />
      <Text fontStyle="italic">Required fields are marked with an asterisk (*).</Text>
      <br />
      <Flex width="50%" justifyContent="space-between">
        <Box >
          <Text fontWeight="bold">Owner *</Text>
          <select style={{ height: "29px", width: "150px", borderRadius: "7px", border: "1px solid" }} name='choose an owner'>
            <option>Choose an owner</option>
            <option>1</option>
            <option>2</option>
          </select>
        </Box>
        <Box>
          <Text fontWeight="bold">Repository name *</Text>
          <Input value={name} onChange={(e) => { setName(e.target.value) }} width="200px" border="solid 1px" borderRadius="7px" h="28px" type="text"></Input>
        </Box>
      </Flex>
      <br />
      <Text>Great repository names are short and memorable. Need inspiration?</Text>
      <br />
      <Text fontWeight="bold">Description <span style={{ fontWeight: "normal" }}>(optional)</span></Text>
      <Input borderRadius="7px" h="50px" width="98%"></Input>
      <br />
      <hr />
      <br />
      <Box borderRadius="7px" padding="16px" backgroundColor="rgb(221, 244, 255)" border="solid 1px" borderColor="rgba(84, 174, 255, 0.4)"><InfoOutlineIcon color="blue" w="20px" marginRight="25px" />Please choose an owner to see the available visibility options.</Box>
      <br />
      <hr />
      <br />
      <Text fontWeight="bold">Initialize this repository with:</Text>
      <br />
      <Checkbox>Add a README file</Checkbox>

      <Text fontSize="15px" color="gray">This is where you can write a long description for your project. Learn more about READMEs.</Text>
      <br />
      <Text fontWeight="bold">Add .gitignore</Text>
      <select style={{ height: "29px", width: "200px", borderRadius: "7px", border: "1px solid" }}>
        <option>.gitignore template:None</option>
      </select>
      <Text fontSize="15px" color="gray">Choose which files not to track from a list of templates. Learn more about ignoring files.</Text>
      <br />
      <Text fontWeight="bold">Choose a license</Text>
      <select style={{ height: "29px", width: "120px", borderRadius: "7px", border: "1px solid" }}>
        <option>License:None</option>
      </select>
      <Text fontSize="15px" color="gray">A license tells others what they can and can't do with your code. Learn more about licenses.</Text>
      <br />
      <hr />
      <br />
      <Flex justifyContent="flex-end">
        <Button onClick={handlsubmit} color="white" colorScheme="green" variant="solid">Create repository</Button>
      </Flex>
      <br />

      <hr />
    </Box>
  )
}
