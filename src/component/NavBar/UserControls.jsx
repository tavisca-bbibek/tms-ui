import React from 'react'

import {ROLE_USER, ROLE_ADMIN} from '../../auth/authentication';
import { Link } from 'react-router-dom';

const UserControls = ({user}) => {
    switch (user.role) {
      case ROLE_ADMIN:
        return (
          <ul>
            <Link to='/admin/add_train'><li>Add Train</li></Link>
            <Link to='/admin/edit_train'><li>Edit Train</li></Link>
          </ul>
        );
      case ROLE_USER:
        return (
          <ul>
           <Link to='/user/tickets'> <li>My Bookings</li></Link>
          </ul>
        );
      default:
        return false;
    }
  };

  export default UserControls;