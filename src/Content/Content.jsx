// import "../Styles/main.css"
import homepagepic from '../Images/homepagepic.png';
import '../Content/Content.css';



const Content = () => {
  // return (
  //   <>
  //   <img className="image" src={homepagepic} />
  //   <container>
  //       <h1>Discover a world</h1>
  //       <span className="second-line">OF ADVENTURE</span>
  //       <div>Unlock the Next Level of Fun! Dive into a world of excitement <br></br> and adventure with our 
  //           thrilling gaming website. <br></br> Play, compete, and conquer today!</div>
  //   </container>

  //   </>
  // )

  return (
 
      <div className="background-video-container">
        <video
          src="https://simplio.io/images/home/simplio-intro-vid.mp4"
          loop
          autoPlay
          muted
          playsInline
          className="background-video"></video>
     <div className="two-column-section">
 
      <div className="text-column">
        <h1 className="title">Discover a world</h1>
        <span className="second-line">OF ADVENTURE</span>
        <p className="description"> 
        Unlock the Next Level of Fun! Dive into a world of excitement <br></br> and adventure with our thrilling gaming website. <br></br> Play, compete, and conquer today!
        </p>
      </div>
      <div className="image-column">
        <img src={homepagepic} alt="Gaming" className="image" />
      </div>
    </div>
    </div>
  );
}

export default Content;