import React from 'react';

const styles = {
  img: {
    margin: "20px",
    height: "120px",
    width: "auto",
  },
  profileImg: {
    float: "left",
    borderRadius: "50%",
    margin: "20px",
    height: "300px",
    width: "auto",
  },
  div: {
    margin: "20px",
    padding: "10px",
  },
  headingStyle: {
    fontSize: '50px',
  },
  h2: {
    fontWeight: "bold",
    color: "#125c4f",
  },
  p: {
    fontSize: "20px",
    marginBottom: "50px",
  },
  hr: {
    width: "600px",
    marginTop: "30px",
  }
};

export default function About() {
  return (
    <div style={styles.div}>
      <img src={process.env.PUBLIC_URL + "/cormillionaireLogo.png"} alt="cormillionaire" style={styles.img}></img>
      <h1 style={styles.headingStyle}>about</h1>
      <div><img src={process.env.PUBLIC_URL + "/images/CorneliaHermanProfile.jpg"} style={styles.profileImg} alt="Photo of cormillionaire"></img>
      <h2 style={styles.h2}>Personal</h2>
      <hr style={styles.hr}></hr>
      <p style={styles.p}>
      I'm Cornelia Herman and in August 2021, I started my journey into web app development. 
      Personally, I enjoy woodworking and creating things in my free time. 
      It pairs well with my degree in Industrial Design from James Madison University. 
      Career wise: I've bounced between data entry, into project management, then business analyst, and now into product management.
      </p>
      <h2 style={styles.h2}>Design</h2>
      <hr style={styles.hr}></hr>
      <p style={styles.p}>
      Most of my experience in design is in hard goods. The practice of design thinking transcends domains because its about being to apply concepts and learning to any problem that needs solving. It's been crucial in my current career as a product manager and is interesting to see how it comes through in my full-stack bootcamp experience.
      </p>
      <h2 style={styles.h2}>Programming</h2>
      <hr style={styles.hr}></hr>
      <p style={styles.p}>
      So far I've enjoyed learning about database models and schemas, MVC architecture, how we can manipulate the frontend, 
      getting additional data from different APIs and look forward to continuing to learn more.
      </p>
      </div>
    </div>
  );
}
