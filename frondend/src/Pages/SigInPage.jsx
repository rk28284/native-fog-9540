import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "../Assets/Logo-transparent.png";
import background from "../Assets/Landing-2.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathComingFrom = location.state?.from?.pathname || "/";
  const handleSignIn = async () => {
    try {
      const response = await axios.post("https://code-collab-backend-ptyi.onrender.com/auth/login", {
        username,
        password,
      });

      // Handle the response from the server
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log(token);
        toast.success("Login successful!");
        navigate(pathComingFrom, { replace: true });
        localStorage.setItem('username',JSON.stringify(username))
      } else {
        toast.error(
          response.data.message || "An error occurred. Please try again later."
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer />
      <Flex
        minH={"100vh"}
        justify="center"
        align="center"
        bgImage={background}
        bgRepeat="repeat"
        bgSize="cover"
      >
        <Box maxW={"500px"} w={{ base: "90%", sm: "80%", md: "50%" }} p={4}>
          <Flex justify="center" mb={8}>
            <Image
              alt={"Sign In Image"}
              objectFit={"contain"}
              src={logo}
              h="100px"
            />
          </Flex>
          <Box bg="white" rounded="lg" boxShadow="lg" p={8}>
            <Stack spacing={4}>
              <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                Sign in to your account
              </Heading>
              <FormControl id="email" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
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
                colorScheme={"blue"}
                variant={"solid"}
                onClick={handleSignIn}
                size="md"
              >
                Sign in
              </Button>
              <Text mt={2} textAlign="center" fontSize="md" color="black.500">
                Don't have an account? <Link to="/signup"> Sign up</Link>
              </Text>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SignIn;
