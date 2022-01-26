import React, { state, Component } from 'react';
import ContactForm from '../ContactForm';

const styles = {
  div: {
    margin: "20px",
    padding: "10px",
  },
  headingStyle: {
    fontSize: '100px',
  },
}

export default function Contact() {
  return (
  <div styles={styles.div}>
    <h1 styles={styles.headingStyle}>contact</h1>
    <ContactForm />
  </div>
  )};