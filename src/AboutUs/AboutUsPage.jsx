import React from 'react';
import '../AboutUs/AboutUs.css';
import gameImage from '../assets/game.jpg';

const TwoColumnSection = () => {
  return (
    <div className="two-column-section">
      <div className="text-column">
        <h1 className="title">Exciting Gaming Experience</h1>
        <p className="description">
          Dive into the world of immersive gameplay and stunning graphics. Join our community of gamers and enjoy exclusive content and rewards.
        </p>
        <button className="cta-button">Join Now</button>
      </div>
      <div className="image-column">
        <img src={gameImage} alt="Gaming" className="image" />
      </div>
    </div>
  );
};

export default TwoColumnSection;
