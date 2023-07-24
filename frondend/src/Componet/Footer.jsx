import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
   Button,Image
  } from '@chakra-ui/react';
  import React from 'react';
  import logo from "../Assets/Logo-transparent.png";
import logo2 from "../Assets/Footer 1.png"
  export const Footer=()=>{
    return <div>
        <Box
      bg={"#040404"}
      color={"white"}>
      <Container as={Stack} maxW={'6xl'} py={10} fontFamily={"apple-system, BlinkMacSystemFont ,Segoe UI Noto Sans, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"} mt={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box textAlign={"justify"}>
              <Image w={200} src={logo} />
            </Box>
            <Box>
            <Text textAlign={"justify"} fontSize={14} fontWeight={600} color={"white"} >Subscribe to our newsletter</Text>
            <Text textAlign={"justify"} fontSize={14} fontWeight={400} color={"rgb(125, 133, 144)"} >Get product updates, company news, and more.</Text>
            </Box>
            <Button border={"1px solid grey"} bg={"black"} color={"white"} _hover={{border:"1px solid white"}} overflow={"auto"}>Subscribe</Button>
          </Stack>
          <Stack align={'flex-start'} fontSize={14} fontWeight={400} color={"rgb(125, 133, 144)"} >
            <Link>Product</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Security</Link>
            <Link href={'#'}>Team</Link>
            <Link href={'#'}>Enterprise</Link>
            <Link href={'#'}>Customer stories</Link>
            <Link href={'#'}>The ReadME Project</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Resources</Link>
            <Link href={'#'}>Roadmap</Link>
            <Link href={'#'}>Compare GitHub</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={14} fontWeight={400} color={"rgb(125, 133, 144)"}>
            <Link>Platform</Link>
            <Link href={'#'}>Developer API</Link>
            <Link href={'#'}>Partners</Link>
            <Link href={'#'}>Electron</Link>
            <Link href={'#'}>GitHub Desktop</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={14} fontWeight={400} color={"rgb(125, 133, 144)"}>
            <Link>Support</Link>
            <Link href={'#'}>Docs</Link>
            <Link href={'#'}>Community Forum</Link>
            <Link href={'#'}>Professional Services</Link>
            <Link href={'#'}>Premium Support</Link>
            <Link href={'#'}>Skills</Link>
            <Link href={'#'}>Status</Link>
            <Link href={'#'}>Contact GitHub</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={14} fontWeight={400} color={"rgb(125, 133, 144)"}>
            <Link >Company</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Inclusion</Link>
            <Link href={'#'}>Social Impact</Link>
            <Link href={'#'}>Shop</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <Box>
        <Image w={"100%"} src={logo2}/>
    </Box>
    </div>
  }