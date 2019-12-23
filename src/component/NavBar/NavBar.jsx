import React, {Component } from "react";

import authentication from "../../auth/authentication";
import UserControls from './UserControls';
import UserInfo from "./UserInfo";
import LoginRegister from './LoginRegister';
import { Link } from "react-router-dom";

class NavBar extends Component {
 
  state = {
    isLoggedIn: authentication.isLoggedIn(),
    user: authentication.getUser()
  }

  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout () {
    authentication.logout();
    this.setState( _=> ({isLoggedIn: false, user: null}));
  };

  render(){
    return (
      <div className="nav-bar">
        <div className="logo-container">
          <Link to="/">
            <span>Home</span>
          </Link>
        </div>
        <div className="controls">
          {this.state.isLoggedIn && <UserControls user={this.state.user} />}
        </div>
        <div className="spacer"></div>
        <div className="user-info">
          {this.state.isLoggedIn ? (
            <UserInfo user={this.state.user} logout={this.logout} />
          ) : (
            <LoginRegister />
          )}
        </div>
      </div>
    );
  
  }  
};

export default NavBar;
