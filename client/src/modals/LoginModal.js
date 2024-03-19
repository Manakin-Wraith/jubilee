import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ open, onClose, onRegisterLinkClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate successful login for testing purposes
        onSuccess();
    };

    const handleInputChange = () => {
        // Clear error message when user starts editing input fields
        setError('');
    };

    const onSuccess = () => {
        // Navigate to the create a list page upon successful login
        navigate('/create');
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleInputChange}
                    error={error !== ''}
                    helperText={error}
                />
                <TextField
                    margin="dense"
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handleInputChange}
                    error={error !== ''}
                    helperText={error}
                />
                <Typography variant="body2" color="error" gutterBottom>{error}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleLogin} color="primary">
                    Login
                </Button>
            </DialogActions>
            <DialogContent>
                <Typography variant="body2">
                    Don't have an account? <Button color="primary" onClick={onRegisterLinkClick}>Register here</Button>
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
