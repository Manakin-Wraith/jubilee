// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage'; // Create this component later

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={LoginPage} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;

