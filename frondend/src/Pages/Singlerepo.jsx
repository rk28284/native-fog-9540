import React from 'react';
import { Avatar, Wrap, WrapItem, Box, Flex, Button,Image, Heading,Text, Spacer, Input } from '@chakra-ui/react';
import {ChevronRightIcon,StarIcon,ViewIcon,LinkIcon,ExternalLinkIcon,CopyIcon} from "@chakra-ui/icons"
import { auto } from '@popperjs/core';
import { Link } from 'react-router-dom';
import logo from "../Assets/desktop.png"
import logo1 from "../Assets/gitimage.png"
import { Footer } from '../Componet/Footer';
export const Singlerepo = () => {
  return (
    <Box
    bgGradient='linear(to-b,black,grey)'
      gap={4}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      h="auto"
      w="100%"
      position="absolute"
    >
      <Flex>
        <Box margin={"auto"}gap={5} display={"flex"} ml={4}>
         
            <Avatar name='Dan Abrahmov' src='https://avatars.githubusercontent.com/u/112754760?v=4' />
            <Heading margin={"auto"}color={"white"} fontSize={"20px"}>Demoname</Heading>
            <Box margin={"auto"} border={"1px solid white"}  backgroundColor={"black"} borderRadius={"50px"} color={"white"} w={100}>
              <Text >
              Public
              </Text>
            </Box>
        
          {/* You can add more WrapItem here if needed */}
        </Box>
        <Spacer/>
        <Box display={"flex"}  gap={4} mr={4} >
                  <Box border={"1px solid #7140c8"} color={"white"} w={100} bg={"black"} p={2} borderRadius={10} _hover={{border:"1px solid white"}}>
                  <Text>📍 Pin</Text>
                  </Box>
                  <Box display={"flex"} border={"1px solid #7140c8"}w={130} color={"white"} bg={"black"} p={2} borderRadius={10} _hover={{border:"1px solid white"}} >
                    <ViewIcon margin={"auto"}/><Text margin={"auto"} >Unwatch</Text>
                    </Box>
                    <Box display={"flex"} border={"1px solid #7140c8"}w={130} color={"white"} bg={"black"} p={2} borderRadius={10} _hover={{border:"1px solid white"}} >
                    <LinkIcon margin={"auto"}/><Text margin={"auto"} mr={8}>Fork</Text>
                    </Box>
                    <Box display={"flex"} border={"1px solid #7140c8"}w={130} color={"white"} bg={"black"} p={2} borderRadius={10} _hover={{border:"1px solid white"}} >
                    <StarIcon margin={"auto"}/><Text margin={"auto"} mr={10}>Star</Text>
                    </Box>
                   
                   
                  
               
                </Box>
      </Flex>
      <hr color='white' />
     <Flex w={"85%"} margin={"auto"} >
        <Box m={"auto"} w={665} marginTop={5} borderRadius={10} padding={4} color={'white'}textAlign={"justify"} border={"1px solid grey"} bgColor={"black"} >
                    <Image  w={8} src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg"/>
         <Link mt={2}>Set up GitHub Copilot</Link>
         <Text mt={2}>Use GitHub's AI pair programmer to autocomplete suggestions as you code.</Text>
         </Box>
         <Box m={"auto"}  w={665} marginTop={5} borderRadius={10} padding={4} color={'white'}textAlign={"justify"} border={"1px solid grey"} bgColor={"black"} >
         
         <Text > <ExternalLinkIcon w={6}/></Text> 
         <Link mt={2}>Invite collaborators</Link>
         <Text mt={2}>Find people using their GitHub username or email address.</Text>
         </Box>
     </Flex>
     <Box  border={"1px solid grey"} bg={"black"} margin={"auto"} w={"85%"} mt={10} borderRadius={15} >
      <Box bg={"#121d2f"} padding={5} border={"1px solid grey"} margin={"auto"} borderRadius={15} >
        <Heading color={'white'} textAlign={"justify"}>Quick setup — if you’ve done this kind of thing before</Heading>
        <Flex mt={5} >

               <Box padding={2} gap={2} border={"1px solid grey"}  display={"flex"} fontSize={20}  as='button' color={"white"}><Image w={7} src={logo} margin={"auto"}/>Setup Destop</Box>
               <Text color={"white"} fontSize={20} mt={2} ml={5}>or</Text> 
                <Box ml={4} border={"1px solid #7140c8"} color={"white"} bg={"black"} p={2} borderRadius={10} _hover={{border:"1px solid white"}} >
                <Text>HTTP</Text>
                </Box>
                <Box mr={100} border={"1px solid #7140c8"} color={"white"} bg={"black"} p={2} borderRadius={10} _hover={{border:"1px solid white"}} >
                    <Text>SSH</Text>
                </Box>
                
                <Input type="text" placeholder="https://github.com/rk28284/practice.git"  bg={"white"} color={"black"} _hover={{border:"1px solid #2196F3"}} w={800}/>
                <Box border={"1px solid grey"} w={10} h={10}>
                <CopyIcon color={"white"}  margin={"3px 100px 0px 10px"} />

                </Box>
           
            </Flex>
            <Text mt={2} color={"white"} textAlign={"justify"}>Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.</Text>
      </Box>
<Box mt={10} border={"1px solid grey"} bg={"black"}  borderRadius={15}>
<Image src={logo1}/>
</Box>
     </Box>
     <Footer/>
    </Box>
  );
};
{/* <Box m={"auto"} display={"block"}>
<Image w={8} src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg"/>
</Box> */}