import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Search from "./Search";
import TrainList from "./TrainList";
import User from "../User/User";
import Admin from "../Admin/Admin";
import NavBar from "../NavBar/NavBar";
import Login from '../Auth/Login';
import Register from '../Auth/Register';

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

    const home = _ => (
      <div className="home-container">
        <Search search={this.loadTrains} />
        <TrainList trains={this.state.trains} />
      </div>
    );

    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/admin" component={Admin} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default Home;
