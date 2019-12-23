import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import authentication from "../../auth/authentication";

import Search from "./Search";
import TrainList from "./TrainList";
import NavBar from "../NavBar/NavBar";
import User from "../User/User";
import Admin from "../Admin/Admin";

class Home extends Component {
  state = {
    trains: [
      {
        id: 1,
        name: "Khatarnak Train",
        source: "mera source",
        destination: "Tera destination",
        arrivalTime: "12:30",
        departureTime: "12:30"
      }
    ]
  };

  constructor(props) {
    super(props);
    this.loadTrains = this.loadTrains.bind(this);
  }

  loadTrains(trainCriteria) {
    //Make an API call to get trains with the given criteria.
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="home-container">
          <Search search={this.loadTrains} />
          <TrainList trains={this.state.trains} />
        </div>
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Fragment>
    );
  }
}

export default Home;
