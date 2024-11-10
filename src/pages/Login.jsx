import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });

  const handleSignIn = () => {
    const emailError = email === "";
    const passwordError = password === "";
    setError({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      navigate('/task');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="black" color="white">
      <Box width="sm" p={6} bg="purple.900" borderRadius="md" boxShadow="lg">
        <Box textAlign="center" mb={8}>
          <Heading size="lg" color="purple.300">VOCA</Heading>
          <Text fontSize="xl" color="white">Task</Text>
        </Box>

        <VStack spacing={4} width="100%">
          <Box width="100%">
            <Text fontSize="sm" mb={1}>Email</Text>
            <Input
              type="email"
              placeholder="enter your email"
              borderRadius={10}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderColor={error.email ? "red.500" : "gray.200"}
            />
            {error.email && (
              <Text fontSize="sm" color="red.500" mt={1}>Email harus diisi</Text>
            )}
          </Box>

          <Box width="100%" mt={4}>
            <Text fontSize="sm" mb={1}>Password</Text>
            <Input
              type="password"
              placeholder="enter your password"
              borderRadius={10}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borderColor={error.password ? "red.500" : "gray.200"}
            />
            {error.password && (
              <Text fontSize="sm" color="red.500" mt={1}>Password harus diisi</Text>
            )}
          </Box>

          <Button
            leftIcon={<CheckIcon />}
            colorScheme="purple"
            width="full"
            mt={6}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
