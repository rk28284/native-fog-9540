import React from "react";
import { Navbar } from "../Componet/Navbar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const HomePage=()=>{
    return <div>
        <Box backgroundImage="url(https://wallpapercave.com/wp/wp5813847.jpg)"
        backgroundSize="cover" backgroundRepeat={"no-repeat"} h={"100vh"} w={"100%"} position={"absolute"}>
            <Navbar/>
            

        </Box>
        
    </div>
}