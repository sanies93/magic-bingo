import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./login.css";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="login">
        <Link to="/">Back to Game</Link>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            login
          </Button>
        </form>
      </div>
    );
  }
}

export default login;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// // maybe add a button

// class login extends React.Component {
//   state = {
//     email: '',
//     username: '',
//     password: '',
//   }

//   render() {
//       return(
// <div>
//     <Link to="/">Back to Game</Link>
//   <form>
//     <input
//       name = 'username'
//       placeholder = 'username' />

//   <input
//       name = 'email'
//       placeholder = 'email' />

//    <input
//       name = 'password'
//       type = 'password'
//       placeholder = 'password' />

//       <button onClick={() => this.onSubmit()} type="primary">Submit</button>
//     </form>

//   </div>

//       )
//   }
// }

// export default login;
