import React, { useState } from 'react';
import ProjectTile from '../ProjectTile';


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
  const projectInfoList =
    [{ liveLink: "https://jstndhouk.github.io/Lazy-Layover/", projectImg: "../../../../images/lazy-layover-homepage.PNG", gitHub: "https://github.com/jstndhouk/Lazy-Layover", handleImh: "", projectName: "lazy layover"},
    { liveLink: "https://cormillionaire.github.io/Weather-Dashboard/", projectImg: "../../../../images/weather-api.PNG", gitHub: "", handleImh: "https://github.com/cormillionaire/Weather-Dashboard", projectName: "weather dashboard" },
    { liveLink: "https://wish-list-fscg.herokuapp.com/", projectImg: "../../../../images/NotSoSubtleSanta.PNG", gitHub: "", handleImh: "https://github.com/nandodavila/Wish-List", projectName: "no so subtle santa" },
    { liveLink: "https://cormillionaire.github.io/TeamProfileGenerator/dist/", projectImg: "../../../../images/TeamGenerator.PNG", gitHub: "https://github.com/cormillionaire/TeamProfileGenerator", handleImh: "", projectName: "team profile generator" },
    { liveLink: "https://corn-tech-blog.herokuapp.com/signup", projectImg: "../../../../images/TechBlog.PNG", gitHub: "https://github.com/cormillionaire/TechBlog", handleImh: "", projectName: "tech blog"  },
    { liveLink: "https://cormillionaire-note-generator.herokuapp.com/", projectImg: "../../../../images/NoteGenerator.PNG", gitHub: "https://github.com/cormillionaire/NoteGenerator", handleImh: "", projectName: "note generator" }];
  //jsx needs to expect an array in order to iterate through the forEach
  let projectTiles = [];

  function createTile(projectInfo) {
    return <ProjectTile projectName={projectInfo.projectName} projectImg={projectInfo.projectImg} handleImg={projectInfo.handleImg} gitHub={projectInfo.gitHub} liveLink={projectInfo.liveLink} />
  };

  function createTiles() {
    return projectInfoList.forEach(projectInfo => projectTiles.push(createTile(projectInfo)))
  };

  createTiles()
  return (
    <div style={styles.div}>
      <h1 style={styles.headingStyle}>portfolio</h1>
      <div className="projects">
        {projectTiles}
      </div>
    </div>
  );
}