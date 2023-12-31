import React from 'react'
import logo from "../Assets/Logo-transparent.png";
import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';
// import {Box, Button, Flex,
//    Image, Input, Link, SimpleGrid, Spacer,Text} from "@chakra-ui/react"
import {Box, Button, Flex,Image, Input, Link, SimpleGrid, Spacer,Text} from "@chakra-ui/react"
import {ChevronDownIcon,SearchIcon,HamburgerIcon} from "@chakra-ui/icons"

export const Navbar = () => {
  let userName = JSON.parse(localStorage.getItem("username"));
  const navigate = useNavigate();
  const handleLogout = () => {
    if(userName){
      localStorage.removeItem("username");
      window.location.reload();
    }else{
        navigate("/signup");
    }
  }
  return (
   <DIV  >
    <Box  m={"auto"} >
      <Flex fontFamily={"apple-system, BlinkMacSystemFont ,Segoe UI Noto Sans, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"}>
        <Box className='logo'  >
          <Link href='/'><Image  ml={4} mt={4}  w={20}  src={logo}></Image></Link>
        </Box>
        <Flex gap={2}  className='Content' m={"auto"}  >
          <Box ml={2}>
          <Link href='*' textDecoration={"none"}><Text _hover={{color:"#BDBDBD"}} color={"white"}>Product <ChevronDownIcon color={"grey"}/></Text></Link>
          </Box>
          <Box>
          <Link href='*' textDecoration={"none"}><Text _hover={{color:"#BDBDBD"}} color={"white"}>Solution <ChevronDownIcon color={"grey"}/></Text></Link>
          </Box>
          <Box>
          <Link href='*' textDecoration={"none"}><Text _hover={{color:"#BDBDBD"}} color={"white"}>OpenSource <ChevronDownIcon color={"grey"}/></Text></Link>
          </Box> 
          <Box>
          <Link href='https://github.com/pricing' textDecoration={"none"}><Text _hover={{color:"#BDBDBD"}} color={"white"}>Pricing</Text></Link> 
          </Box>
        </Flex>
        <Box mt={4} ml={490} className='search' >
          <Input  type='text'  placeholder='Search or jump to...' border={"1px solid grey"}  color={"white"} _hover={"none"}  />
        </Box>
        <Spacer/>
        
        <Box m={"auto"} mt={2} >
        <Flex className='btn'  gap={2} mr={2} mt={2}>
          <Link href='signin'><Button className='Signin' _hover={{color:"grey"}} w={20} background={"none"} color={"white"} >{userName? `Hi ${userName}`:"SignIn"}</Button></Link>
          <Link href='/signup'><Button className='signup'  w={20} _hover={{bg:"none",color:"grey",border:"1px solid grey"}} border={"1px solid white"} background={"none"} color={"white"} onClick={handleLogout}>{(JSON.parse(localStorage.getItem("username"))&&"LogOut")||"SignUp"}</Button></Link>
          <Box className='icon'>
          <HamburgerIcon w={20} color={"#ffffff"}/>
        </Box>
        </Flex>
        </Box>
        
      </Flex>
    </Box>
    
   </DIV>


  )
  
}
const DIV=styled.div`
   @media all and (min-width:1011px){
    .icon{
      display: none;
    }
   }
  @media all and (min-width:481px) and (max-width:1010px){
    .logo{
      display:block;
      margin:auto ;
      justify-content: center;
      
    }
   
   .signin{
    display: block;
    margin: auto;
    justify-content: start;
    align-items:start
    
   }
   .Content{
    display: none;
   }
   .search{
    display: none;
   }
   .icon{
    display: block;
    margin: auto;
    align-items: end;
    }
    .signup{
      display: block
    }
  }
  @media all and (max-width:480px){
    .logo{
      display:block;
      margin:auto ;
      justify-content: center;
      
    }
   
   .signin{
    display: block;
    margin: auto;
    justify-content:start
   }
   .Content{
    display: none;
   }
   .search{
    display: none;
   }
   .icon{
    display: block;
      margin: auto;
      align-items: end;
    }
    .signup{
      display: block
    }
  }
  `