// LoginModal.js
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom';
import RegisterModal from './RegisterModal'; // Import RegisterModal component

const LoginModal = ({ open, onClose }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [registerModalOpen, setRegisterModalOpen] = useState(false); // State for RegisterModal

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        onClose();
    };


    const handleRegisterLinkClick = () => {
        onClose(); // Close the login modal
        setRegisterModalOpen(true); // Open the register modal
    };

    const handleRegisterModalClose = () => {
        setRegisterModalOpen(false); // Close the register modal
    };

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Container maxWidth="xs">
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography component="h1" variant="h5">Login</Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoFocus
                                    value={credentials.username}
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Login
                                </Button>
                            </Box>
                            <Typography variant="body2">
                                Don't have an account? 
                                <Link component="button" variant="body2" onClick={handleRegisterLinkClick}> Register here.</Link>
                            </Typography>
                        </Box>
                    </Container>
                </DialogContent>
            </Dialog>
            {/* Render RegisterModal if open */}
            <RegisterModal open={registerModalOpen} onClose={handleRegisterModalClose} />
        </>
    );
};

export default LoginModal;
