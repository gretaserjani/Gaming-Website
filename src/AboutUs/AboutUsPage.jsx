import React from 'react';
import '../AboutUs/AboutUs.css';
import gameImage from '../assets/game.jpg';
import { useNavigate } from 'react-router-dom';

const TwoColumnSection = () => {
  const navigate = useNavigate();
  return (
    <div className="two-column-section">
      <div className="text-column">
        <h1 className="title">Exciting Gaming</h1>
        <span className="second-line">Experience</span>
        <p className="description">
          Dive into the world of immersive gameplay and stunning graphics. Join our community of gamers and enjoy exclusive content and rewards.
        </p>
        <button className="cta-button" onClick={() => navigate(`/signin`)}>Join Now</button>
      </div>
      <div className="image-column">
        <img src={gameImage} alt="Gaming" className="image" />
      </div>
    </div>
  );
};

export default TwoColumnSection;
