import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Booking from '../User/Booking';

class SeatAvailability extends Component {
    state = {
        availability: []
    }

    constructor(props){
        super(props);
    }

    generateAvailability(date, numberOfSeats){
        return {date, numberOfSeats};
    }

    componentDidMount(){
      const trainId = this.props.trainId;
      const request = {
        params: {trainId}
      }
      axios.get('availability.json', request).then(
        resp =>  {
          this.setState({availability: resp.data})
        }
      ).catch(err => {
          console.log(err);
      });
    }

    render(){
        return (
          <div>
            <div>
              <span>{this.props.train.id}</span>
              <span>{this.props.train.name}</span>
            </div>
            <div>
              {this.state.availability.map((availability, index) => (
                <div>
                  <div>{index}</div>
                  <div>{availability.date}</div>
                  <div>{availability.numberOfSeats}</div>
                  <br />
                  <Link
                    to={{
                      pathname: "user/booking",
                      state: {
                        train: { ...this.props.train, date: availability.date }
                      }
                    }}
                  >
                    <button>Book Now</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
    }
}

export default SeatAvailability;