import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const CreateWishlistItemPage = () => {
    const [wishlistItem, setWishlistItem] = useState({
        image: '',
        title: '',
        notes: '',
        url: '',
    });

    const handleChange = (e) => {
        setWishlistItem({
            ...wishlistItem,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">Create Wishlist Item</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="image"
                        label="Image URL"
                        name="image"
                        value={wishlistItem.image}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Title/Description"
                        name="title"
                        value={wishlistItem.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="notes"
                        label="Notes"
                        name="notes"
                        multiline
                        rows={4}
                        value={wishlistItem.notes}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="url"
                        label="URL"
                        name="url"
                        value={wishlistItem.url}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Wishlist Item
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateWishlistItemPage;
