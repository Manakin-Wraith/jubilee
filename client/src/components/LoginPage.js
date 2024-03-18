import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            {/* Add login form here */}
            <Button as={Link} to="/" colorScheme="blue" mt={4}>Back to Home</Button>
        </div>
    );
};

export default LoginPage;
