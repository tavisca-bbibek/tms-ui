import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import authentication from '../../auth/authentication';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    constructor(props){
        super(props);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeEmail(e){
        const email = e.target.value;
        this.setState({email});
    }

    changePassword(e){
        const password = e.target.value;
        this.setState({password});
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
       authentication.login(this.state.email, this.state.password);
    }

    render(){
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
            <button type='submit' onClick={this.handleSubmit}>Login</button>
            or <Link to='/register'>Register</Link>
          </form>
        );
    }
}

export default Login;