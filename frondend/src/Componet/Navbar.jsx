import React from 'react'
import {Box, Button, Flex, Image, Input, Link, SimpleGrid, Spacer,Text} from "@chakra-ui/react"
import {ChevronDownIcon,SearchIcon} from "@chakra-ui/icons"
export const Navbar = () => {
  return (
   <div  >
    <Box w={"100%"} m={"auto"}>
      <Flex>
        <Box m={"auto"}>
        <SimpleGrid columns={{base:0,md:5}} >
          <Box ml={4} >
            <Link href='/'><Image w={20} src='./Code-collab-logo.png'></Image></Link>
          </Box>
          <Link href='./Product.png' textDecoration={"none"}><Text _hover={{color:"#BDBDBD"}} color={"white"}>Product <ChevronDownIcon color={"grey"}/></Text></Link>
          <Link href='*' textDecoration={"none"}><Text _hover={{color:"#BDBDBD"}} color={"white"}>Solution <ChevronDownIcon color={"grey"}/></Text></Link>
          <Link href='*' textDecoration={"none"}><Text _hover={{color:"#BDBDBD"}} color={"white"}>Open Source <ChevronDownIcon color={"grey"}/></Text></Link> 
          <Link href='https://github.com/pricing' textDecoration={"none"}><Text _hover={{color:"#BDBDBD"}} color={"white"}>Pricing</Text></Link> 
        </SimpleGrid>
        </Box>
        <Spacer/>
        <Box mt={2} mr={2} >
          <Input  type='text'  placeholder='Search or jump to...' border={"1px solid grey"}  color={"white"} _hover={"none"}  />
        
        </Box>
        <Box m={"auto"}  >
        <SimpleGrid  columns={{base:0,md:2}} gap={2} mr={2} mt={2}>
          <Button _hover={{color:"grey"}} w={20} background={"none"} color={"white"} >SignIn</Button>
          <Button  w={20} _hover={{bg:"none",color:"grey",border:"1px solid grey"}} border={"1px solid white"} background={"none"} color={"white"}>Signup</Button>
        </SimpleGrid>
        </Box>
        
      </Flex>
    </Box>
    
   </div>
  )
}
