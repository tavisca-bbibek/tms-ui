import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import authentication from "../../auth/authentication";

class Login extends Component {
  getEmptyState() {
    return {
      email: "",
      password: ""
    };
  }

  state = this.getEmptyState();

  constructor(props) {
    super(props);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.setState(this.getEmptyState());
    authentication.login(this.state.email, this.state.password);
  }

  render() {
    if (authentication.isLoggedIn()) return <Redirect to="/" />;

    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.changeEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.changePassword}
        />
        <button onClick={this.handleSubmit}>Login</button>
        or <Link to="/register">Register</Link>
      </form>
    );
  }
}

export default Login;
