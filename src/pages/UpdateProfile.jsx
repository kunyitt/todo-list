import React from 'react';
import { Box, Button, Input, VStack, Avatar, Text, IconButton, Heading } from "@chakra-ui/react";
import { ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";

const UpdateProfile = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="black" color="white">
      <Box width="sm" p="6" bg="purple.900" borderRadius="md" boxShadow="lg">

        <Box display="flex" alignItems="center" mb="4">
          <IconButton
            icon={<ArrowBackIcon />}
            color="white"
            variant="unstyled"
            mr="2"
          />
          <Heading size="md">Edit Profile</Heading>
        </Box>

        <Box display="flex" justifyContent="center" mb="4">
          <Avatar size="xl" bg="purple.300" />
        </Box>

        <VStack spacing="4">
          <Box width="100%">
            <Text fontSize="sm" mb="1">Profile URL</Text>
            <Input placeholder="<Image URL>" bg="purple.900" borderRadius={10} />
          </Box>
          <Box width="100%">
            <Text fontSize="sm" mb="1">Name</Text>
            <Input placeholder="Lavender" bg="purple.900" borderRadius={10} />
          </Box>
          <Box width="100%">
            <Text fontSize="sm" mb="1">Email</Text>
            <Input placeholder="lavender@gmail.com" bg="purple.900" borderRadius={10} />
          </Box>
          <Box width="100%">
            <Text fontSize="sm" mb="1">Password</Text>
            <Input type="password" placeholder="********" bg="purple.900" borderRadius={10} />
          </Box>

          <Button leftIcon={<CheckIcon />} colorScheme="purple" width="full" mt="4">
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default UpdateProfile;
