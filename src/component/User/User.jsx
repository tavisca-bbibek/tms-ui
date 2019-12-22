import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import authentication from '../../auth/authentication';

import Booking from './Booking';
import TicketContainer from './TicketContainer';

class User extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render(){
    const user = authentication.getUser();
    if(user === undefined)
      return <Redirect to='/login' />

    return (
      <div className="user-container">
        <Route
          path="/user/tickets"
          {...this.props}
          component={TicketContainer}
        />
        <Route path="/user/booking" {...this.props}>
          {this.props.location.state && this.props.location.state.train ? (
            <Booking train={this.props.location.state.train} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </div>
    );
  }
}

export default User;