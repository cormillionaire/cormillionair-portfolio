import React, { useState } from 'react';
import '../../styles/Project.css';

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
  const [project1, setProject] = useState (["../../../../images/lazy-layover-homepage.PNG", "../../../../images/lazy-layover-results.PNG"])
  function changeBackground(e) { e.target.style.background = 'red';}
  return (
    <div>
      <h1 style={styles.headingStyle}>portfolio</h1>
      <div className="projects">
      <a href="https://jstndhouk.github.io/Lazy-Layover/" target="blank" className="projectTile"><img src={project1[0]} className="img-fluid projectImage" alt="Lazy Layover Home Page" onMouseOver={changeBackground} onMouseLeave={setProject}></img></a>
      <a href="https://cormillionaire.github.io/Weather-Dashboard/" target="blank" className="projectTile"><img src="../../../../images/weather-api.PNG" className="img-fluid projectImage" alt="..."></img></a>
      <a href="https://wish-list-fscg.herokuapp.com/" target="blank" className="projectTile"><img src="../../../../images/NotSoSubtleSanta.PNG" className="img-fluid projectImage" alt="..."></img></a>
      <a href="https://github.com/cormillionaire/ECommerceBackend" target="blank" className="projectTile"><img src="../../../../images/EcommerceBackend.PNG" className="img-fluid projectImage" alt="..."></img></a>
      <a href="https://cormillionaire.github.io/Weather-Dashboard/" target="blank" className="projectTile"><img src="../../../../images/weather-api.PNG" className="img-fluid projectImage" alt="..."></img></a>
      <a href="https://cormillionaire.github.io/TeamProfileGenerator/dist/" target="blank" className="projectTile"><img src="../../../../images/TeamGenerator.PNG" className="img-fluid projectImage" alt="..."></img></a>
      <a href="https://corn-tech-blog.herokuapp.com/signup" target="blank" className="projectTile"><img src="../../../../images/TechBlog.PNG" className="img-fluid projectImage" alt="..."></img></a>
      <a href="https://cormillionaire-note-generator.herokuapp.com/" target="blank" className="projectTile"><img src="../../../../images/NoteGenerator.PNG" className="img-fluid projectImage" alt="..."></img></a>
      </div>
    </div>
  );
}