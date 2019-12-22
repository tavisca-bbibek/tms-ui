import React from 'react';
import { Link } from 'react-router-dom'

import authentication from '../../auth/authentication';

const NavBar = () => {
  const user = authentication.getUser();
  const userInfo = user => (
    <ul>
      <li>{user.name}</li>
      <li><button onClick={authentication.logout()}>Logout</button></li>
    </ul>
  );

  const loginRegister = () => (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );

  const userControls =  _=> {
      switch (user.role) {
        case "ADMIN":
          return (
            <ul>
              <li>Add Train</li>
              <li>Add Station</li>
            </ul>
          );
        case "USER":
          return (
            <ul>
              <li>My Bookings</li>
            </ul>
          );
        default:
          return false;
      }
  }
  return (
    <div className='nav-bar'>
      <div className="controls">{(!user === null) &&userControls()}</div>
      <div className="spacer"></div>
      <div className="user-info">
        {user === null ? loginRegister() : userInfo(user)}
      </div>
    </div>
  );
}

export default NavBar;