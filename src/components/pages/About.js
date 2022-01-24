import React from 'react';

const styles = {
  img: {
    margin: "20px",
    height: "120px",
    width: "auto",
  },
  div: {
    margin: "20px",
    padding: "10px",
  },
  headingStyle: {
    fontSize: '50px',
  },
};

export default function About() {
  return (
    <div style={styles.div}>
      <img src="/cormillionaireLogo.png" alt="cormillionaire" style={styles.img}></img>
      <h1 style={styles.headingStyle}>about</h1>
      <p>
      I'm Cornelia Herman and in August 2021, I started my journey into web app development. 
      Personally, I enjoy woodworking and creating things in my free time. 
      It pairs well with my degree in Industrial Design from James Madison University. 
      Career wise: I've bounced between data entry, into project management, then business analyst, and now into product management.
      </p>
      <p>
      So far I've enjoyed learning about database models and schemas, MVC architecture, how we can manipulate the frontend, 
      getting additional data from different APIs and look forward to continuing to learn more.
      </p>
    </div>
  );
}
