import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, FormControlLabel, Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateWishlistItemPage = () => {
    const [wishlistItem, setWishlistItem] = useState({
        title: '',
        isPrivate: false,
    });
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWishlistItem(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleToggle = () => {
        setWishlistItem(prevState => ({
            ...prevState,
            isPrivate: !prevState.isPrivate,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // For demonstration purposes, we'll just navigate to the list page with the title as a query parameter
        navigate(`/list?title=${wishlistItem.title}`);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">What do you want to call your gift list?</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '50%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Name your list"
                        name="title"
                        value={wishlistItem.title}
                        onChange={handleChange}
                    />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <FormControlLabel
                            control={<Switch checked={wishlistItem.isPrivate} onChange={handleToggle} />}
                            label="Make list private"
                            sx={{ flexGrow: 1, textAlign: 'center', marginLeft: 14 }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 5, marginLeft: 14 }}
                    >
                        Save and Continue
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateWishlistItemPage;