import React from 'react'
import authentication from '../../auth/authentication';

import Ticket from './Ticket';

class TicketContainer extends React.Component {
  state = {
    tickets: []
  };

  constructor(props) {
    super(props);
  }

  generateTicket(id, trainId, passengers){
    return {id, trainId, passengers}
  }

  generatePassenger(name, age, gender){
      return {name, age, gender};
  }

  componentDidMount(){
    //Make api call
      this.setState({
        tickets: [
          this.generateTicket(1, 444, [this.generatePassenger('Anoop', 12, 'Male'), this.generatePassenger('Anoop', 12, 'Male')])
        ]
      })
  }

  render() {
    console.log("inside ticket container");
    return (
      <div>
        {this.state.tickets.map(ticket => (
          <Ticket {...ticket} />
        ))}
      </div>
    );
  }
}

export default TicketContainer;