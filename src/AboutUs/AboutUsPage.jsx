import React from 'react';
import styles from './styles.module.css';
import gameImage from '../assets/game.jpg';
import { useNavigate } from 'react-router-dom';

const TwoColumnSection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.twocolumnsection}>
      <div className={styles.textcolumn}>
        <h1 className={styles.title}>Exciting Gaming</h1>
        <span className={styles.secondline}>Experience</span>
        <p className={styles.description}>
          Dive into the world of immersive gameplay and stunning graphics. Join our community of gamers and enjoy exclusive content and rewards.
        </p>
        <button className={styles.ctabutton} onClick={() => navigate(`/signin`)}>Join Now</button>
      </div>
      <div className={styles.imagecolumn}>
        <img src={gameImage} alt="Gaming" className={styles.image} />
      </div>
    </div>
  );
};

export default TwoColumnSection;