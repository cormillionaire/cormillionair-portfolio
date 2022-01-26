import React, { useState } from 'react';
import '../styles/Project.css';

function ProjectTile({ projectName, projectImg, handleImg, gitHub, liveLink }) {
    return (
        <div className="projectTile">
            <img src={projectImg} className="img-fluid projectImage" alt={projectName} onMouseOver={handleImg} onMouseLeave={projectImg}></img>
            <a href={gitHub} target="blank" className="gitHubProjectLink"><i className="fab fa-github" aria-hidden="true"></i></a>
            <a href={liveLink} target="blank" className="projectLink">{projectName}</a>
        </div>
            );
    }

export default ProjectTile;