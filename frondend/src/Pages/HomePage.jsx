import React from "react";
import { Navbar } from "../Componet/Navbar";
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Input, Text } from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons"
import logo from "../Assets/homeimg 1.png"
import logo1 from "../Assets/homeimg 2.png"
import logo2 from "../Assets/homeimg 3.png"
export const HomePage=()=>{
    return <div>
        <Box backgroundImage="url(https://wallpapercave.com/wp/wp5813847.jpg)"
        backgroundSize="cover" backgroundRepeat={"no-repeat"} h={"auto"} w={"100%"} position={"absolute"}>
        <Navbar/>
        <Box m={"auto"} w={"80%"} fontFamily={"apple-system, BlinkMacSystemFont ,Segoe UI Noto Sans, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"} fontWeight={400}>
            <Box as="button" overflow={"hidden"} border={"1px solid grey"} w={"380px"} borderRadius={100} m={"100px 0px 0px 0px"} color={"white"} p={1} display={"flex"} gap={2} >
                <Box m={"auto"} display={"block"}>
                    <Image w={8} src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg"/>
                </Box>
                <Box mr={10}>
                <Text mr={10}>Introducing Github Copilot X</Text>
                <Text>Your AI programmer is leveling up</Text>
                </Box>
                <Box m={"auto"} mr={5}>
                <ChevronRightIcon/>
                </Box>
            </Box>
            <Box color={"white"} mt={8} mr={100} >
                <Text fontSize={80} textAlign={"justify"} fontWeight={600}>Let's build from here</Text>
                <Text  fontSize={32} textAlign={"justify"} color={"grey"}>The AI-Powered Developer Platform to Build, Scale, and Deliver Secure Software</Text>
            </Box>
            <Flex mt={5}>
                <Input type="text" placeholder="Email address" bg={"white"} color={"black"} _hover={{border:"1px solid #2196F3"}} w={350}/>
                <Button color={"white"} bg={"#7140c8"} _hover={"none"} overflow={"auto"}>Sign up for GitHub</Button>
                <Box  border={"1px solid #7140c8"} color={"white"} bg={"black"} p={2} borderRadius={10} _hover={{border:"1px solid white"}} ml={10}>
                    <Text>Satrt a free enterprise trial <ChevronRightIcon/></Text>
                </Box>
            </Flex>
            <Text mt={10} textAlign={"justify"} color={"#BDBDBD"}>Trusted by the world’s leading organizations ↘︎</Text>
            <Grid templateColumns={"repeat(6,1fr)"} mt={5} gap={4}>
                <GridItem>
                    <Image src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"/>
                </GridItem>
                <GridItem>
                    <Image src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"/>
                </GridItem>
                <GridItem>
                    <Image src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"/>
                </GridItem>
                <GridItem>
                    <Image src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg"/>
                </GridItem>
                <GridItem>
                    <Image src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg"/>
                </GridItem>
                <GridItem>
                    <Image src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg"/>
                </GridItem>
            </Grid>
            <Box mt={10}fontSize={38} fontWeight={500}>
                <Heading color={"white"} fontWeight={500} fontSize={24} textAlign={"justify"}>Productivity</Heading>
                <Text color={"rgb(126, 231, 135)"} textAlign={"justify"}>Accelerate high-quality software development.</Text>
                <Text color={"white"} textAlign={"justify"}>Our AI-powered platform drives innovation with tools that boost developer velocity.</Text>
                <Box>
                <Image   w={1800} src={logo}/>
                </Box>
                <Box fontSize={24} fontWeight={500}  textAlign={"justify"} w={500} >
                    <Box w={400}>
                    <Text color={"#BDBDBD"} textAlign={"justify"}>
                    GitHub Codespaces offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.
                    </Text>
                    </Box>
                    <Text mt={5} color={"white"}>Check out GitHub Codespaces <ChevronRightIcon/></Text>
                </Box>
                <Box textAlign={"justify"}  mt={10}>
                    <Button borderRadius={100} border={"1px solid rgb(126, 231, 135)"} color={"rgb(126, 231, 135)"} bg={"black"}>Did you know?</Button>
                    <Heading fontSize={64} fontWeight={500} color={"rgb(126, 231, 135)"}>22% increase</Heading>
                    <Text fontSize={20} color={"white"}>in developer productivity <br /> after three years with GitHub1</Text>
                </Box>
            </Box>
            <Box mt={10}>
                <Image w={2000} src={logo1}/>
            </Box>
            <Box mt={5}>
            <Image w={1500} src={logo2}/>
            </Box>
        </Box>
        </Box>
        
    </div>
}