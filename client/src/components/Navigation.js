import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Home, Login, PersonAdd, Add } from '@mui/icons-material';

const Navigation = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" p={2} bgcolor="#f0f0f0">
            {[
                { to: '/', label: 'Home', icon: <Home /> },
                { to: '/login', label: 'Login', icon: <Login /> },
                { to: '/register', label: 'Register', icon: <PersonAdd /> },
                { to: '/create', label: 'Create Wishlist Item', icon: <Add /> },
            ].map(({ to, label, icon }) => (
                <Button key={to} component={Link} to={to} startIcon={icon} sx={{ mx: 1 }}>
                    {label}
                </Button>
            ))}
        </Box>
    );
};

export default Navigation;
