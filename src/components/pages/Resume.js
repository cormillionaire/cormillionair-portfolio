import React from 'react';
import '../../styles/Resume.css';

const styles = {
  div: {
    margin: "20px",
    padding: "10px",
  },
  headingStyle: {
    fontSize: '100px',
  },
  resume: {
    fontSize: '40px',
    color: "#54A578",
  }
};

export default function Resume() {
  return (
    <div style={styles.div}>
      <h1 style={styles.headingStyle}>resume</h1>
      <a href={process.env.PUBLIC_URL +"/images/CorneliaHermanResume.pdf"} class="nav-link px-2 " style={styles.resume}><i class="far fa-file-pdf"></i> download resume</a>
      <h2>Development</h2>
      <ul className="skillsList">
        <li>Proficient with markup like HTML and Markdown</li>
        <li>Familiar with CSS</li>
        <li>Proficient with JavasScript</li>
        <li>Familiar with Jquery</li>
        <li>Familiar with Node</li>
        <li>Familiar with Express</li>
        <li>Familiar with SQL &#38; NoSQL</li>
        <li>Familiar with React</li>
        <li>Familiar with creating RESTful APIs</li>
        <li>Familiar with GraphQL</li>
      </ul>
      <h2>Architecture</h2>
      <ul className="skillsList">
      <li>Familiar with MVC</li>
      <li>Familiar with designing RESTful APIs</li>
      <li>Familiar with MERN stack</li>
      <li>Familiar with big O notation</li>
      <li>Familiar with MERN stack</li>
      <li>Familiar with ERD and data structures</li>
      </ul>
    </div>
  );
}
