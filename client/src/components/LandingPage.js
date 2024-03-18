// LandingPage.js
import React from 'react';
import { Box, Button, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Center h="100vh">
            <Box textAlign="center">
                <h1>Welcome to My App</h1>
                <Button colorScheme="blue" mt={4}>Create a New List</Button>
                <Box mt={4}>
                    <p>Already have an account?</p>
                    <Button as={Link} to="/login" colorScheme="blue" ml={2}>Login</Button>
                    <Button as={Link} to="/register" colorScheme="green" ml={2}>Register</Button>
                </Box>
            </Box>
        </Center>
    );
};

export default LandingPage;
