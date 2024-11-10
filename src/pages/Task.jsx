import React from 'react';
import { Box, Button, Input, VStack, HStack, Text, IconButton, Avatar } from "@chakra-ui/react";
import { AddIcon, EditIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();

  const handleEditProfile =() => {
    navigate('/update/profile');
  }
  const handleSignOut =() => {
    navigate('/')
  }

  const tasks = [
    { text: "To study React fundamentals" },
    { text: "To study React fundamentals" },
    { text: "To study React fundamentals" },
    { text: "To study React fundamentals" },
  ];

  const completedTasks = [
    { text: "To study React fundamentals" },
  ];

  return (
    <Box display="flex" minHeight="100vh" bg="black" color="white" padding="4">

      <Box width="25%" padding="5" m={5} bg="purple.900" borderRadius="md" mr="4">
        <VStack spacing="4">
          <Avatar size="xl" />
          <Text fontSize="xl" mb={4}>Welcome Back, <strong>Lave!</strong></Text>
          <Button leftIcon={<EditIcon />} colorScheme="green" variant="solid" width="full" onClick={handleEditProfile}>
            Edit Profile
          </Button>
          <Button leftIcon={<CheckIcon />} colorScheme="red" variant="solid" width="full" onClick={handleSignOut}>
            Sign Out
          </Button>
        </VStack>
      </Box>

      <Box width="75%" padding="5" m={5} bg="purple.900" borderRadius="md">
        <VStack spacing="4" align="stretch">
          
          {/* Input new task */}
          <HStack mb={4}>
            <Input placeholder="Add a new task" bg="purple.900" />
            <IconButton icon={<AddIcon />} colorScheme="purple" />
          </HStack>

          {/* Task list */}
          <Box>
            <Text fontSize="lg" mb="2">Tasks to do - {tasks.length}</Text>
            <VStack spacing="4" align="stretch">
              {tasks.map(task => (
                <HStack bg="black" padding="4" borderRadius="md" justify="space-between">
                  <Text>{task.text}</Text>
                  <HStack>
                    <IconButton icon={<CheckIcon />} variant="ghost" colorScheme="green" />
                    <IconButton icon={<DeleteIcon />} variant="ghost" colorScheme="red" />
                  </HStack>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Completed task list */}
          <Box mt={4}>
            <Text fontSize="lg" mb="2">Done - {completedTasks.length}</Text>
            <VStack spacing="4" align="stretch">
              {completedTasks.map(task => (
                <Box bg="black" padding="4" borderRadius="md">
                  <Text textDecoration="line-through" color="green.400">{task.text}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Task;
