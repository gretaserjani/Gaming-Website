// import "../Styles/main.css"
import homepagepic from '../Images/homepagepic.png';
import '../Content/Content.css';



const Content = () => {
  return (
    <>
    <container>
        <h1>Discover a world</h1>
        <span className="second-line">OF ADVENTURE</span>
        <div>Unlock the Next Level of Fun! Dive into a world of excitement <br></br> and adventure with our 
            thrilling gaming website. <br></br> Play, compete, and conquer today!</div>
    </container>
    <img className="image" src={homepagepic} />
    </>
  )
}

export default Content;