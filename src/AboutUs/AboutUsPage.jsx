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
<div className='big-column'>
        <div className='col-1'> 
      <h3>Who We Are</h3>
      <p>At Game Nexus, we're a passionate team of gamers, writers, and tech enthusiasts dedicated to bringing you the latest and greatest in the gaming universe. From in-depth reviews and breaking news to insightful editorials and detailed guides, our mission is to be your go-to source for comprehensive gaming content.</p>
      </div>
      <div className='col-1'> 
      <h3>Our Mission</h3>
      <p>Our goal is to create a vibrant community where gamers can come together to share their love for games. We strive to provide accurate, engaging, and diverse content that caters to gamers of all genres and skill levels. We believe in the power of games to entertain, inspire, and bring people together, and we're here to celebrate that every day.</p>
</div>
</div>
      <h3>What We Offer</h3>
      <ul>
        <li><strong>Game Reviews:</strong> Honest and thorough reviews to help you make informed decisions about your next game purchase.</li>
        <li><strong>News:</strong> Up-to-date coverage of the latest developments in the gaming industry.</li>
        <li><strong>Guides & Tutorials:</strong> Step-by-step guides to help you master your favorite games and overcome challenging levels.</li>
        <li><strong>Features & Editorials:</strong> Thought-provoking articles and features on trends, innovations, and the culture of gaming.</li>
        <li><strong>Community Engagement:</strong> Interactive forums, live streams, and events where you can connect with fellow gamers and our team.</li>
      </ul>
        <button className="cta-button">Join Now</button>
      </div>
      <div className="image-column">
        <img src={gameImage} alt="Gaming" className="image" />
      </div>
    </div>
  );
};

export default TwoColumnSection;
