import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../Assets/Logo-transparent.png";
import background from "../Assets/Landing-2.jpg";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    // Add your sign-up logic here
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        <Box maxW="600px" w={{ base: "90%", sm: "80%", md: "50%" }} p={4}>
          <Flex justify="center" mb={8}>
            <Image alt={"Sign Up Image"} objectFit={"contain"} src={logo} h="100px" />
          </Flex>
          <Box bg="white" rounded="lg" boxShadow="lg" p={8} >
            <Stack spacing={4}>
              <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                Create an account
              </Heading>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  size="md"
                />
              </FormControl>
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
              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    size="md"
                  />
                  <InputRightElement width="3rem">
                    {showConfirmPassword ? (
                      <ViewOffIcon onClick={handleToggleConfirmPassword} />
                    ) : (
                      <ViewIcon onClick={handleToggleConfirmPassword} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={handleSignUp}
                size="md"
              >
                Sign up
              </Button>
              <Text mt={2} textAlign="center" fontSize="md" color="black.500">
                Already have an account? <Link to="/signin">Sign in</Link>
              </Text>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SignUp;
