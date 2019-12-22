import React, {Component} from 'react';
import EditTrain from './EditTrain';

class Admin extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <EditTrain />
      </div>
    );
  }
}

export default Admin;