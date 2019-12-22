import React, {Component} from 'react';

import EditPassengerDetails from './EditPassengerDetails.js';

class Booking extends Component {

    MIN_PASSENGERS = 1;
    MAX_PASSENGERS = 8;

    constructor(props){
        super(props);
        this.addPassengerDetails = this.addPassengerDetails.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.removeDetails = this.removeDetails.bind(this);
    }

    state = {
        passengers: [this.getEmptyPassengerDetails()]
    }

    getEmptyPassengerDetails(){
        return {
            name: '',
            age: '',
            gender: ''
        }
    }

    changeName(index, name){
        this.state.passengers[index].name = name;
        this.setState({});
    }

    changeAge(index, age){
        this.state.passengers[index].age = age;
        this.setState({});
    }

    changeGender(index, gender){
        this.state.passengers[index].gender = gender;
        this.setState({});
    }

    removeDetails(index){
        if(this.state.passengers.length <= this.MIN_PASSENGERS)
            return;

        this.state.passengers.splice(index, 1);
        this.setState({});
    }

    getValueChangeActions(index){
        return {
            changeName: (name) => this.changeName(index, name),
            changeAge: (age) => this.changeAge(index, age),
            changeGender: (gender) => this.changeGender(index, gender),
            remove: () => this.removeDetails(index)
        };
    }

    addPassengerDetails(){
        if(this.state.passengers.length >= this.MAX_PASSENGERS)
            return;

        this.state.passengers.push(this.getEmptyPassengerDetails());
        this.setState({});
    }


   render(){
    const addPassengerBtn = <button onClick={this.addPassengerDetails}>Add</button>;
    return (
      <div>
        <div>
          <div>
            {this.props.train.id} | {this.props.train.name}
          </div>
          <div>
            <div>Date:{this.props.train.date}</div>
            <div>Source:{this.props.train.source}</div>
            <div>Destination:{this.props.train.destination}</div>
          </div>
        </div>
        <div>
          {this.state.passengers.map((passengerDetails, index) => (
            <EditPassengerDetails
              {...passengerDetails}
              actions={this.getValueChangeActions(index)}
            />
          ))}
          {addPassengerBtn}
          <button onClick={this.bookTicket}>Confirm</button>
        </div>
      </div>
    );
   }
}

export default Booking;