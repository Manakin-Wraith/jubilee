import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LandingPage = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const navigate = useNavigate(); 

    const handleLoginModalOpen = () => {
        setLoginModalOpen(true);
    };

    const handleLoginModalClose = () => {
        setLoginModalOpen(false);
    };

    const handleRegisterModalClose = () => {
        setRegisterModalOpen(false);
    };

    // Callback function to handle navigation after successful login
    const handleLoginSuccess = () => {
        handleLoginModalClose(); // Close the login modal
        navigate('/create'); // Navigate to the /create page
    };

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={10}>
                <Typography variant="h1" gutterBottom>Welcome to JUBILEE</Typography>
                <Typography variant="body1" gutterBottom>
                    Gift them what they want! Save, share, and link your gift lists with your circle.
                </Typography>
                <Button
                    onClick={handleLoginModalOpen}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 4, fontWeight: 'bold' }} // Increase button weight for emphasis
                    startIcon={<Add />}
                >
                    Create Your List
                </Button>
            </Box>

            {/* Login Modal */}
            <LoginModal open={loginModalOpen} onClose={handleLoginModalClose} onSuccess={handleLoginSuccess} />

            {/* Register Modal */}
            <RegisterModal open={registerModalOpen} onClose={handleRegisterModalClose} />
        </Container>

    );
};

export default LandingPage;
