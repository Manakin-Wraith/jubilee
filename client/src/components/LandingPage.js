import React from 'react';
import { Box, Button, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Center h="100vh">
            <Box textAlign="center">
                <h1>Welcome to My App</h1>
                <Button as={Link} to="/login" colorScheme="blue" mt={4}>Login</Button>
            </Box>
        </Center>
    );
};

export default LandingPage;
