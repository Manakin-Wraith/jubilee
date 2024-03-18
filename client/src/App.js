// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'; // Import RegisterPage component
import CreateWishlistItemPage from './components/CreateWishlistItemPage';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <Router>
            <div>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/create" element={<CreateWishlistItemPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} /> {/* Add route for RegisterPage */}
                {/* Add more routes as needed */}
            </Routes>
            </div>
        </Router>
    );
};

export default App;
