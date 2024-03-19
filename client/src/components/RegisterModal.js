// RegisterModal.js
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const RegisterModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loginModalOpen, setLoginModalOpen] = useState(false); // State for LoginModal

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        onClose();
    };

    const handleLoginLinkClick = () => {
        onClose(); // Close the register modal
        setLoginModalOpen(true); // Open the login modal
    };

    const handleLoginModalClose = () => {
        setLoginModalOpen(false); // Close the login modal
    };

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                    <Container maxWidth="xs">
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography component="h1" variant="h5">Register</Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoFocus
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
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
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Register
                                </Button>
                            </Box>
                            <Typography variant="body2">
                                Already have an account? 
                                <Link component="button" variant="body2" onClick={handleLoginLinkClick}> Login here.</Link>
                            </Typography>
                        </Box>
                    </Container>
                </DialogContent>
            </Dialog>
            {/* Render LoginModal if open */}
            <LoginModal open={loginModalOpen} onClose={handleLoginModalClose} />
        </>
    );
};

export default RegisterModal;
