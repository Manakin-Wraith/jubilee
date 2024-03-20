// ListPage.js
import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField } from '@mui/material';

const ListPage = ({ wishlistTitle }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            const newItem = {
                title: inputValue,
                notes: '', // You can add logic here to set notes or any other properties
                url: '',   // You can add logic here to set URL or any other properties
            };
            setWishlistItems([...wishlistItems, newItem]);
            setInputValue('');
        }
    };

    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={5}>
                <Typography variant="h1" gutterBottom>{wishlistTitle}</Typography>
                {wishlistItems.map((item, index) => (
                    <div key={index}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography>{item.notes}</Typography>
                        <Typography>{item.url}</Typography>
                    </div>
                ))}
                <Box display="flex" alignItems="center" justifyContent="center">
                    <TextField
                        value={inputValue}
                        onChange={handleChange}
                        label="Add Item"
                        fullWidth
                        sx={{ mr: 2 }}
                    />
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
