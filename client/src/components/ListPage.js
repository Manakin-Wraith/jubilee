import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Card, CardContent, Grid, Avatar, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material'; // Import Delete icon from MUI
import { useLocation } from 'react-router-dom';

// Function to parse the item URL and extract relevant information
const parseItemURL = (url) => {
    // Implement parsing logic here (e.g., extract store details and product info)
    // For demonstration, return a placeholder string
    return 'Look at this gift';
};

const ListPage = ({ wishlistTitle }) => {
    const location = useLocation();
    const title = new URLSearchParams(location.search).get('title');
    const profilePicture = location.state?.profilePicture || null; // Access profile picture from location state
    const [wishlistItems, setWishlistItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [itemURL, setItemURL] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleImageChange = (e) => {
        setImageURL(e.target.value);
    };

    const handleURLChange = (e) => {
        setItemURL(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            const newItem = {
                title: inputValue,
                notes: '', // You can add logic here to set notes or any other properties
                image: imageURL, // Add image URL
                url: itemURL,   // Add item URL
            };
            setWishlistItems([...wishlistItems, newItem]);
            setInputValue('');
            setImageURL('');
            setItemURL('');
        }
    };

    const handleDeleteItem = (index) => {
        const updatedList = wishlistItems.filter((_, i) => i !== index);
        setWishlistItems(updatedList);
    };

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={5}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    {profilePicture && (
                        <Avatar
                            alt="Profile Picture"
                            src={profilePicture}
                            sx={{ width: 100, height: 100, mb: 2, mr: 2 }}
                        />
                    )}
                    <Typography variant="h4" gutterBottom>{title}</Typography>
                </Box>
                <Grid container spacing={3}>
                    {wishlistItems.map((item, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Card variant="outlined">
                             <CardContent sx={{ position: 'relative' }}> {/* Add relative positioning */}
                             <IconButton
                                     color="error" // Set the color of the icon button
                                     onClick={() => handleDeleteItem(index)}
                                     sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }} // Positioning
                             >
                              <Delete />
                                </IconButton>
                                    <Typography variant="h3" component="h2" gutterBottom>
                                       {item.title}
                                    </Typography>
        <Typography variant="body1">
            {item.notes}
        </Typography>
        {item.image && (
            <img src={item.image} alt="Item" style={{ maxWidth: '100%', marginTop: '8px' }} />
        )}
        {item.url && (
            <Typography variant="body2" color="textSecondary">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {parseItemURL(item.url)}
                </a>
            </Typography>
        )}
    </CardContent>
</Card>

                        </Grid>
                    ))}
                </Grid>
                <Box display="flex" alignItems="center" justifyContent="center" mt={3}>
                    <TextField
                        value={inputValue}
                        onChange={handleChange}
                        label="Add Item"
                        fullWidth
                        sx={{ mr: 2 }}
                    />
                    {inputValue.trim() && (
                        <>
                            <TextField
                                value={imageURL}
                                onChange={handleImageChange}
                                label="Image URL(optional)"
                                fullWidth
                                sx={{ mr: 2 }}
                            />
                            <TextField
                                value={itemURL}
                                onChange={handleURLChange}
                                label="Item URL(optional)"
                                fullWidth
                                sx={{ mr: 2 }}
                            />
                        </>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddItem}
                    >
                        Add
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ListPage;
