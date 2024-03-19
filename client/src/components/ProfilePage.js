import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField } from '@mui/material';

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

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={5}>
                <Typography variant="h1" gutterBottom>User Profile</Typography>
                <Box mt={3}>
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
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Profile
                    </Button>
                    <Button variant="outlined" color="primary">
                        Upload Profile Picture
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfilePage;
