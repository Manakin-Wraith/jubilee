// RegisterModal.jsx
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';

const RegisterModal = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        // Perform registration logic here, for example, validate inputs
        if (password !== confirmPassword) {
            setError("Passwords don't match");
        } else {
            // Proceed with registration logic
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                />
                <TextField
                    margin="dense"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={error !== ''}
                    helperText={error}
                />
                <Typography variant="body2" color="error" gutterBottom>{error}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleRegister} color="primary">
                    Register
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RegisterModal;
