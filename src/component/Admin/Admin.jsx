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
    console.log("-----------------------------------In admin");
    if (!authentication.isLoggedIn()) return <Redirect to="/login" />;
    return (
      <Fragment >
        <Route path="/admin/add_train" component={EditTrain} />
        <Route path="/admin/edit_train" {...this.props} component={EditTrain} />
      </Fragment>
    );
  }
}

export default Admin;