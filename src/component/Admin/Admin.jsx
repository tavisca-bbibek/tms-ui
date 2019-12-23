import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import authentication from '../../auth/authentication';

import EditTrain from './EditTrain';

class Admin extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render(){
    if (!authentication.isLoggedIn()) return <Redirect to="/login" />;
    return (
      <Switch>
        <Route path="/admin/add_train" component={EditTrain} />
        <Route path="/admin/edit_train" {...this.props} component={EditTrain} />
      </Switch>
    );
  }
}

export default Admin;