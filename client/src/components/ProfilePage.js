import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField, Avatar, Link } from '@mui/material';
import gerhard from '../images/gerhard.jpeg';

const ProfilePage = () => {
    // Mock profile data
    const [profile, setProfile] = useState({
        username: 'Gerhard Mostert',
        email: 'g.mostertpot@gmail.com',
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
                <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                    <Avatar
                        alt={profile.username}
                        src={profile.profilePicture || gerhard} // Use profile picture or placeholder image
                        sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6" gutterBottom>
                        {profile.username}
                    </Typography>
                    <Link variant="body2" color="primary" underline="hover" href="#">
                        Edit
                    </Link>
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
                    <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                        Save Profile
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfilePage;
