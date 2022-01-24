import React from 'react';


const styles = {
  div: {
    margin: "20px",
    padding: "10px",
  },
  headingStyle: {
    fontSize: '100px',
  },
};

export default function Portfolio() {
  return (
    <div>
      <h1 style={styles.headingStyle}>portfolio</h1>
      <div className="projects">
        <img src="../../../../images/lazy-layover-homepage.PNG" className="img-fluid projectImage" alt="Lazy Layover Home Page"></img>
        <img src="../../../../images/KittensPlaying.jpg" className="img-fluid projectImage" alt="..."></img>
        <img src="../../../../images/portfolio-mobile.PNG" className="img-fluid projectImage" alt="..."></img>
        <img src="..." className="img-fluid projectImage" alt="..."></img>
      </div>
    </div>
  );
}
