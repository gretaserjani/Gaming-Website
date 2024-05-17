import "../Styles/main.css"
import homepage from '../Images/homepage.png';


const Content = () => {
  return (
    <container>
        <h1>Discover a world</h1>
        <span className="second-line">OF ADVENTURE</span>
        <div>Unlock the Next Level of Fun! Dive into a world of excitement <br></br> and adventure with our 
            thrilling gaming website. <br></br> Play, compete, and conquer today!</div>
        <img className="cat" src={homepage} />
        
        
    </container>
  )
}

export default Content;