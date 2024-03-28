// ProfilePage.js
import React, { useState, useRef } from 'react';
import { Box, Button, Container, Typography, TextField, Avatar, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const ProfilePage = () => {
    // Mock profile data
    const [profile, setProfile] = useState({
        username: 'Gerhard Mostert',
        email: 'g.mostertpot@gmail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        profilePicture: null, // Add profile picture property
    });

    const navigate = useNavigate(); // Initialize useNavigate hook
    const fileInputRef = useRef(null); // Reference to file input element

    // Handle profile update
    const handleProfileUpdate = (field, value) => {
        setProfile({ ...profile, [field]: value });
    };

    // Handle save profile button click
    const handleSaveProfile = () => {
        // Save profile logic
        // Navigate to the create page
        navigate('/create', { state: { profilePicture: profile.profilePicture } });
    };

    // Handle edit link click
    const handleEditClick = () => {
        // Trigger file input click
        fileInputRef.current.click();
    };

    // Handle file upload change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Add logic to handle file upload (e.g., upload to server)
            // For demonstration, updating profile picture directly
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({ ...profile, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={5}>
                <Typography variant="h2" gutterBottom>Congrats!</Typography>
                <Typography variant="h4" gutterBottom>Your new profile is created, save or edit and continue!</Typography>
                <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                    <Avatar
                        alt={profile.username}
                        src={profile.profilePicture} // Use profile picture or placeholder image
                        sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Link
                        variant="body2"
                        color="primary"
                        underline="hover"
                        href="#"
                        onClick={handleEditClick}
                        sx={{ ':hover': { textDecoration: 'none' } }} // Hover effect
                    >
                        Edit
                    </Link>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <TextField
                        label="Email"
                        value={profile.email}
                        disabled
                        fullWidth
                        sx={{ mb: 2, mt: 2 }}
                    />
                    <TextField
                        label="Bio"
                        multiline
                        rows={4}
                        value={profile.bio}
                        onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                        fullWidth
                        sx={{ mb: 3, mt: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSaveProfile} sx={{ mb: 2 }}>
                        Save Profile
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfilePage;
