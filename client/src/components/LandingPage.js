import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={10}>
                <Typography variant="h1" gutterBottom>Welcome to JUBILEE</Typography>
                <Typography variant="body1" gutterBottom>
                    Gift them what they want! Save, share, and link your gift lists with your circle.
                </Typography>
                <Button
                    component={Link}
                    to="/create"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 4, fontWeight: 'bold' }} // Increase button weight for emphasis
                    startIcon={<Add />}
                >
                    Create a New List
                </Button>
            </Box>
        </Container>
    );
};

export default LandingPage;
