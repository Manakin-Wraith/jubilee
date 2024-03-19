import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField, Avatar, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    // Mock profile data
    const [profile, setProfile] = useState({
        username: 'example_user',
        email: 'example@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    });

    // Handle profile update
    const handleProfileUpdate = (field, value) => {
        setProfile({ ...profile, [field]: value });
    };

    // Navigate to wishlist page after saving profile
    const navigate = useNavigate();
    const handleSaveProfile = () => {
        // Save profile logic here
        navigate('/create'); // Navigate to wishlist page
    };

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={5}>
                <Typography variant="h1" gutterBottom>User Profile</Typography>
                <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                    <Avatar sx={{ width: 120, height: 120, mb: 2 }}>U</Avatar>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        <Link href="#" color="primary" underline="always">
                            Edit
                        </Link>
                    </Typography>
                    <TextField
                        label="Username"
                        value={profile.username}
                        disabled
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Email"
                        value={profile.email}
                        disabled
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Bio"
                        multiline
                        rows={4}
                        value={profile.bio}
                        onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSaveProfile} sx={{ mr: 2 }}>
                        Save Profile
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfilePage;