import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "../Styles/main.css"
import logo from '../Images/logo.png';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.ClassList.toggle("responsive_nav")
    }

    const navigate = useNavigate();

    

  return (
    <header>
         <img src={logo} alt="Logo" />              
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/signin" onClick={() => navigate(`/signin}`)}>Sign In</a>
            
            <button className="nav-btn nav-close-btn" onClick={showNavbar}> 
                <FaTimes/>
            </button>
            <button className="button"> Explore Games</button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default Header;