import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ user, logout }) => (
  <ul className="login-user-details">
    <li id="show-name">{user.name}</li>
    <li>
      <Link to="/">
        <button onClick={logout}>Logout</button>
      </Link>
    </li>
  </ul>
);

  export default UserInfo;