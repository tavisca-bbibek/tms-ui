import React, { Component, Fragment as Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import authentication from "../../auth/authentication";

import Booking from "./Booking";
import TicketContainer from "./TicketContainer";
import NavBar from "../NavBar/NavBar";
import Search from "../Public/Search";
import TrainList from "../Public/TrainList";

class User extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    if (!authentication.isLoggedIn()) return <Redirect to="/login" />;
    return (
      <Fragment>
        <Route
          {...this.props}
          path="/user/tickets"
          component={TicketContainer}
        />
        <Route path="/user/booking" {...this.props}>
          {this.props.location.state && this.props.location.state.train ? (
            <Booking train={this.props.location.state.train} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Fragment>
    );
  }
}

export default User;
