import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={10}>
                <Typography variant="h2" gutterBottom>Welcome to JUBILEE</Typography>
                <Button
                    component={Link}
                    to="/create"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 4, mr: 2 }}
                >
                    Create a New List
                </Button>
                <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 4 }}
                >
                    Login
                </Button>
                <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ mt: 4, ml: 2 }}
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default LandingPage;
