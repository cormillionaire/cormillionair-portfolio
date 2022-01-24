import React, { useState, setState, Component } from 'react';
import '../styles/Form.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: false,
      contact: '',
      email: '',
      emailError: false,
      message: '',
      messageError: false,
      formValid: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  };
  isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    if (value.length <= 0 && (name == 'name')) {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }
    if (value.length <= 0 || (name == 'email')) {
      this.setState({ emailError: true });
    } else {
      this.setState({ emailError: false });
      if (this.isValidEmail(value)) {
        this.setState({ emailError: false });
      } else {
        this.setState({ emailError: true });
      }
    }
  }
  handleInputChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  // Getting the value and name of the input which triggered the change
  handleFormSubmit(e) {
    const { name, email, message, nameError, emailError, messageError } = this.state;

    this.setState({ nameError: name ? false : true });
    this.setState({ messageError: message ? false : true });
    this.setState({ emailError: email ? false : true });

    if (name && email && message && !nameError && !emailError && !messageError) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }
    e.preventDefault();
  }
  render () {
    const { name, email, message, nameError, emailError, messageError, formValid } = this.state;
    if (!formValid) {
      return (
        <div>
          <h1>contact</h1>
          <form className="form-floating">
            <div className="form-floating mb-3 ">
              <input name="name" type="text" className="form-control" id="nameInput" placeholder="name" value={name} onChange={this.handleInputChange} onBlur={this.handleBlur} required></input>
              <label htmlFor="nameInput">name</label>
              {nameError
                ? <div className="alert alert-danger">Name is a required field.</div>
                : ''
              }
            </div>
            <div className="form-floating mb-3 ">
              <input name="email" type="email" className="form-control" id="emailInput" placeholder="name@example.com" value={email} onChange={this.handleInputChange} onBlur={this.handleBlur} required></input>
              <label htmlFor="emailInput" >email address</label>
              {emailError
                ? <div className="alert alert-danger">Email is a required field and must be valid.</div>
                : ''
              }
            </div>
            <div className="form-floating">
              <textarea name="message" className="form-control textArea" id="messageInput" placeholder="Leave a comment here" value={message} onChange={this.handleInputChange} onBlur={this.handleBlur} required></textarea>
              <label htmlFor="messageInput">message</label>
              {messageError
                ? <div className="alert alert-danger">Message is a required field.</div>
                : ''
              }
            </div>
            <div className="m-3">
              <button className="btn" type="submit" onClick={this.handleFormSubmit} >submit</button>
            </div>
          </form>
        </div>
      );
    };
  };
};

export default ContactForm;