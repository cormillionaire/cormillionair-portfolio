import React, { useState } from 'react';
import '../styles/Form.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from './utils/helpers';

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Name is required');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!message) {
      setErrorMessage(
        `Message is required to submit`
      );
      return;
    }
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <form className="form-floating">
        <div className="form-floating mb-3 ">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            className="form-control"
            id="nameInput"
          />
          <label htmlFor="nameInput">name</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            className="form-control"
            id="emailInput"
          />
          <label htmlFor="emailInput" >email address</label>
        </div>
        <div className="form-floating">
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Write your message here"
            className="form-control textArea"
            id="messageInput"
          />
          <label htmlFor="messageInput">message</label>
        </div>
        <div className="m-3">
          <button className="btn" type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {
        errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )
      }
    </div>
  );
}

export default ContactForm;