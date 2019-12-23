import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './component/Public/Home';
import User from './component/User/User';
import Admin from './component/Admin/Admin';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';

class App extends Component {

  constructor(props){
    super(props);
  }

  
  render(){
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
        </Router>
      </div>
    );
   }
}
export default App;
