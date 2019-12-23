import React, {Component} from 'react';

import EditPassengerDetails from './EditPassengerDetails';

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
      <div className='passenger-container'>
        <div>
            <div >
              <label>Train Number: </label>
              <span>{this.props.train.id}</span>
              <label>Train Name: </label>  
              <span>{this.props.train.name}</span>
            </div>
          <div>
            <label>Date: </label>
            <span>{this.props.train.date}</span>
            <label>Source: </label>
            <span>{this.props.train.source}</span>
            <label>Destination: </label>
            <span>{this.props.train.destination}</span>
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