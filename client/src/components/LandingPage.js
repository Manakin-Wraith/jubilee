import React, { useState } from 'react';
import { Box, Button, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ProfilePage from './ProfilePage'; // Import your ProfilePage component

const LandingPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [mode, setMode] = useState('login'); // Track the mode: 'login' or 'register'
    const [isRegistered, setIsRegistered] = useState(false); // Track user registration status
    const navigate = useNavigate();

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handleSwitchMode = () => {
        // Toggle between login and register modes
        setMode(mode === 'login' ? 'register' : 'login');
    };

    const handleAuthentication = () => {
        // Simulate authentication (replace with your actual authentication logic)
        if (mode === 'register') {
            setIsRegistered(true); // Set user as registered after successful registration
        }
        navigate('/profile'); // Redirect to profile page after registration/login
    };

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={10}>
                <Typography variant="h1" gutterBottom>Welcome to JUBILEE</Typography>
                <Typography variant="body1" gutterBottom>
                    Gift them what they want! Save, share, and link your gift lists with your circle.
                </Typography>
                <Button
                    onClick={handleModalOpen}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 4, fontWeight: 'bold' }} // Increase button weight for emphasis
                    startIcon={<Add />}
                >
                    Create Your List
                </Button>
            </Box>

            {/* Login/Register Modal */}
            <Dialog open={openModal} onClose={handleModalClose}>
                <DialogTitle>{mode === 'login' ? 'Login' : 'Register'}</DialogTitle>
                <DialogContent>
                    {mode === 'login' ? (
                        <>
                            <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 2 }} />
                            <TextField label="Password" type="password" variant="outlined" fullWidth />
                        </>
                    ) : (
                        <>
                            <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 2 }} />
                            <TextField label="Email" type="email" variant="outlined" fullWidth sx={{ mb: 2 }} />
                            <TextField label="Password" type="password" variant="outlined" fullWidth />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => { handleModalClose(); handleAuthentication(); }} color="primary" variant="contained">
                        {mode === 'login' ? 'Login' : 'Register'}
                    </Button>
                </DialogActions>
                <DialogActions>
                    <Button onClick={handleSwitchMode} color="primary" variant="text">
                        {mode === 'login' ? 'No account? Register' : 'Already have an account? Login'}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Profile Page */}
            {isRegistered && <ProfilePage />}
        </Container>
    );
};

export default LandingPage;
