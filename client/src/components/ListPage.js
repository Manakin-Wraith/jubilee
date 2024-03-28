import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Card, CardContent, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const ListPage = ({ wishlistTitle }) => {
    const location = useLocation();
    const title = new URLSearchParams(location.search).get('title');
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

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={5}>
                <Typography variant="h2" gutterBottom>{title}</Typography>
                <Grid container spacing={3}>
                    {wishlistItems.map((item, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.notes}
                                    </Typography>
                                    {item.image && (
                                        <Typography variant="body2" color="textSecondary">
                                            Image: {item.image}
                                        </Typography>
                                    )}
                                    {item.url && (
                                        <Typography variant="body2" color="textSecondary">
                                            URL: {item.url}
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
                                label="Image URL"
                                fullWidth
                                sx={{ mr: 2 }}
                            />
                            <TextField
                                value={itemURL}
                                onChange={handleURLChange}
                                label="Item URL"
                                fullWidth
                                sx={{ mr: 2 }}
                            />
                        </>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddItem}
                        startIcon={<AddIcon />} // Add icon to the button
                    >
                        Add
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ListPage;
