import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Grid } from '@mui/material';

const LoginModal = ({ open, onClose, onSuccess, onRegisterLinkClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        // Perform login logic here, for example, validate credentials
        if (email === 'user@example.com' && password === 'password') {
            onSuccess(); // Close modal on successful login
        } else {
            setEmailError('Invalid email');
            setPasswordError('Invalid password');
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Email Address"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={emailError !== ''}
                            helperText={emailError}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="dense"
                            label="Password"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={passwordError !== ''}
                            helperText={passwordError}
                        />
                    </Grid>
                </Grid>
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
