import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';

const LandingPage = () => {
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    const handleCreateList = () => {
        setOpenLoginModal(true);
    };

    const handleLoginModalClose = () => {
        setOpenLoginModal(false);
    };

    const handleLoginSuccess = () => {
        setOpenLoginModal(false);
    };

    const handleLoginModalLinkClick = () => {
        setOpenLoginModal(false);
        setOpenRegisterModal(true);
    };

    const handleRegisterModalClose = () => {
        setOpenRegisterModal(false);
    };

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={10}>
                <Typography variant="h1" gutterBottom>Welcome to JUBILEE</Typography>
                <Typography variant="h4" gutterBottom>
                    Gift them what they want! Save, share, and link your gift lists with your circle.
                </Typography>
                <Button
                    onClick={handleCreateList}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 4, fontWeight: 'bold' }}
                    startIcon={<Add />}
                >
                    Create Your List
                </Button>
                <Box sx={{ mt: 5 }}>
                    <Typography variant="body2" gutterBottom>
                        Already have an account?{' '}
                        <span style={{ cursor: 'pointer', color: 'blue' }} onClick={setOpenLoginModal}>Log in</span>
                    </Typography>
                    <Typography variant="body2">
                        New here?{' '}
                        <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setOpenRegisterModal(true)}>Register</span>
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: openLoginModal || openRegisterModal ? 'block' : 'none',
                }}
            >
                {openLoginModal && (
                    <LoginModal open={openLoginModal} onClose={handleLoginModalClose} onSuccess={handleLoginSuccess} onRegisterLinkClick={handleLoginModalLinkClick} />
                )}
                {openRegisterModal && (
                    <RegisterModal open={openRegisterModal} onClose={handleRegisterModalClose} />
                )}
            </Box>
        </Container>
    );
};

export default LandingPage;