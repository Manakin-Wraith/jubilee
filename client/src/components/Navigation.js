import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Home, Login, PersonAdd, Add } from '@mui/icons-material';

const Navigation = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#f0f0f0',
            }}
        >
            <Button component={Link} to="/" startIcon={<Home />}>
                Home
            </Button>
            <Button component={Link} to="/login" startIcon={<Login />}>
                Login
            </Button>
            <Button component={Link} to="/register" startIcon={<PersonAdd />}>
                Register
            </Button>
            <Button component={Link} to="/create" startIcon={<Add />}>
                Create Wishlist Item
            </Button>
        </Box>
    );
};

export default Navigation;
