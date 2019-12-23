import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
          <div className='train-data'>
          <label>Train Number: </label>
            <span>{this.props.train.id}</span>
            <label>Train Name: </label>  
            <span>{this.props.train.name}</span>
          </div>
          <div>
          <table>
            <tbody>
              <tr>  
                {this.state.availability.map((availability, index) => (
                    <td>
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
                </td>
            ))}
            </tr>
          </tbody>
            </table>
          </div>
        </div>
      );
    }
}

export default SeatAvailability;