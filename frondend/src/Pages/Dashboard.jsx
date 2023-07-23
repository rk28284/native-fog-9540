import { Box, Button, Flex, HStack, Img, Input, Link, Text, textDecoration, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Dashboard = () => {
const navigate = useNavigate()
const [data,setData] = useState([])
  // const data = [
  //   { repo: "reposiratory  1" },
  //   { repo: "reposiratory  2" },
  //   { repo: "reposiratory  3" },
  //   { repo: "reposiratory  4" },
  //   { repo: "reposiratory  1" },
  //   { repo: "reposiratory  2" },
  //   { repo: "reposiratory  3" },
  //   { repo: "reposiratory  4" },
  //   { repo: "reposiratory  5" }
  //   // { repo: "reposiratory  1" },
  //   // { repo: "reposiratory  2" },
  //   // { repo: "reposiratory  3" },
  //   // { repo: "reposiratory  4" },
  //   // { repo: "reposiratory  1" },
  //   // { repo: "reposiratory  2" },
  //   // { repo: "reposiratory  3" },
  //   // { repo: "reposiratory  4" },
  //   // { repo: "reposiratory  5" },
  //   // { repo: "reposiratory  5" }
  // ]
  useEffect(()=>{

    fetch(`https://code-collab-backend-ptyi.onrender.com/repos/userRepo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    }).then((res) => res.json()).then((res) => {
      console.log(res.repos)
      setData(res.repos)
    }).catch((error) => {
      console.log(error)
    })
  },[])
  
  

  const handleClick = ()=>{

    navigate("/repo")

  }
  return (
    <Flex justifyContent="space-between">
      <VStack width="30%" alignItems="flex-start" paddingLeft="50px"  overflowY="scroll" height="600px" >
        <Text>Username</Text>
        <Box backgroundColor="gray" height="1px"></Box>
        <Flex width="70%" justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Top Repositories</Text>
          <Button onClick={()=>handleClick()} color="white" colorScheme="green" variant="solid" width="50px" height="30px">New</Button>
        </Flex>
        <Input padding="10px" border="1px solid" width="70%" borderRadius="7px" placeholder='Find a reposiratory...'></Input>
        <VStack>
          {data?.map((ele,index) => {
            return <Link key={index} href='#' textDecoration="none">{ele.name}</Link>
          })}
        </VStack>
        <Img src="https://i.ibb.co/RpTMBLT/dashboard-png-2.jpg"></Img>
      </VStack>
      <Box width="65%">
        <Img width="100%" src='https://i.ibb.co/TqWkzxL/github-dashboard.jpg'></Img>
      </Box>
    </Flex>
  )
}
