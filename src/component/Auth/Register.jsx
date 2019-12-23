import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import authentication from "../../auth/authentication";

class Register extends Component {
  getEmptyState() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      nationality: "",
      mobileNumber: "",
      dateOfBirth: ""
    };
  }
  state = this.getEmptyState();

  constructor(props) {
    super(props);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeNationality = this.changeNationality.bind(this);
    this.changeMobileNumber = this.changeMobileNumber.bind(this);
    this.changeDateOfBirth = this.changeDateOfBirth.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeEmail(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  changePassword(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  changeConfirmPassword(e) {
    const confirmPassword = e.target.value;
    this.setState({ confirmPassword });
  }

  changeFirstName(e) {
    const firstName = e.target.value;
    this.setState({ firstName });
  }

  changeLastName(e) {
    const lastName = e.target.value;
    this.setState({ lastName });
  }

  changeNationality(e) {
    const nationality = e.target.value;
    this.setState({ nationality });
  }

  changeMobileNumber(e) {
    const dateOfBirth = e.target.value;
    this.setState({ dateOfBirth });
  }

  changeMobileNumber(e) {
    const mobileNumber = e.target.value;
    this.setState({ mobileNumber });
  }

  changeDateOfBirth(e) {
    const dateOfBirth = e.target.value;
    this.setState({ dateOfBirth });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(this.getEmptyState());
    console.log(this.state);
  }

  render() {
    if (authentication.isLoggedIn()) return <Redirect to="/" />;

    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.changeEmail}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.changePassword}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={this.state.confirmPassword}
          onChange={this.changeConfirmPassword}
        />
        <br />
        <input
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.changeFirstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.changeLastName}
        />
        <br />
        <input
          type="text"
          placeholder="Nationality"
          value={this.state.nationality}
          onChange={this.changeNationality}
        />
        <input
          type="phone"
          placeholder="Mobile Number"
          value={this.state.mobileNumber}
          onChange={this.changeMobileNumber}
        />
        <br />
        <input
          type="date"
          value={this.state.dateOfBirth}
          onChange={this.changeDateOfBirth}
        />
        <br />
        <button type="submit" onClick={this.handleSubmit}>
          Register
        </button>
        or <Link to="/login">Login</Link>
      </form>
    );
  }
}

export default Register;
