// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreateWishlistItemPage from './components/CreateWishlistItemPage';
import Navigation from './components/Navigation';
import ProfilePage from './components/ProfilePage';

const App = () => {
    return (
        <Router>
            <div>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/create" element={<CreateWishlistItemPage />} />
                <Route path="/profile" element={<ProfilePage />} /> {/* Add route for RegisterPage */}
                {/* Add more routes as needed */}
            </Routes>
            </div>
        </Router>
    );
};

export default App;
