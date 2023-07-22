import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from "./Assets/Logo2.png"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    // Perform sign-in logic here
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer />
      <Flex
        minH={'100vh'}
        justify="center"
        align="center"
        bgImage="url('https://wallpapersmug.com/download/1920x1080/aac738/horsehead-nebula-space-clouds.jpg')" 
        bgRepeat="repeat"
        bgSize="cover"
      >
        <Box maxW={"500px"}  w={{ base: "90%", sm: "80%", md: "50%" }} p={4}>
          <Flex justify="center" mb={8}>
            <Image alt={"Sign In Image"} objectFit={"contain"} src={logo} h="100px" />
          </Flex>
          <Box bg="white" rounded="lg" boxShadow="lg" p={8}  >
            <Stack spacing={4}>
              <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                Sign in to your account
              </Heading>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="md" 
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size="md" 
                  />
                  <InputRightElement width="3rem">
                    {showPassword ? (
                      <ViewOffIcon onClick={handleTogglePassword} />
                    ) : (
                      <ViewIcon onClick={handleTogglePassword} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                colorScheme={'blue'}
                variant={'solid'}
                onClick={handleSignIn}
                size="md" 
              >
                Sign in
              </Button>
              <Text mt={2} textAlign="center" fontSize="md" color="black.500">
                Don't have an account?{' '}
                Sign up
              </Text>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SignIn;
