import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Import CSS file for styling

const Landing = () => {
    return (
        <div className="landing-container">
            <h1>Welcome to Recipe hub</h1>
            <p className="animated-text">Cook, Connect, Enjoy: Your Recipe Hub</p>
            <Link to="/recipes">View Recipes</Link>
        </div>
    );
};

export default Landing;
