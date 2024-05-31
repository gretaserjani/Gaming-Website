import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import styles from './styles.module.css';



const Header = () => {
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu Open:", isMenuOpen); 
  };

  return (
    <header>
      <img src={logo} alt="Logo" />
      <button className="nav-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={isMenuOpen ? "menu open" : "menu"}>
        <a href="/#">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/categories">Categories</a> 

        <a href="/signin">Sign In</a>
        <button className={styles.button} onClick={() => navigate(`/games`)}>Explore Games</button>
      </nav>
    </header>
  );
};

export default Header;