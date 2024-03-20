// CreateWishlistItemPage.js
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, FormControlLabel, Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setWishlistTitle } from '../actions/wishlistActions';


const CreateWishlistItemPage = () => {
    const [wishlistItem, setWishlistItem] = useState({
      title: '',
      isPrivate: false,
    });
    const dispatch = useDispatch();
  
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWishlistItem(prevState => ({
          ...prevState,
          [name]: value,
        }));
    
        // Dispatch action to update wishlist title
        dispatch(setWishlistTitle(value));
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
        // For demonstration purposes, we'll just navigate to the list page
        navigate(`/list/${wishlistItem.title}`);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">Create Wishlist Item</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
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
                    <FormControlLabel
                        control={<Switch checked={wishlistItem.isPrivate} onChange={handleToggle} />}
                        label="Make list private"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Save and Continue
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateWishlistItemPage;
