import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom';

import authentication from '../../auth/authentication';
import {ROLE_ADMIN} from '../../auth/authentication';

import TrainSchedule from './TrainSchedule';
import SeatAvailibility from './SeatAvailability';

class TrainList extends Component {
  state = {
    isAdmin:
      authentication.getUser() && authentication.getUser().role === ROLE_ADMIN
        ? true
        : false
  };

  constructor(props) {
    super(props);
  }

  deleteTrain(trainId) {
    //Make an API call to delete the train.
  }

  schedulePopup(trigger, train) {
    return (
      <Popup trigger={<span>{trigger}</span>} modal closeOnDocumentClick>
        {close => (
          <div className="popup">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header">Train Schedule</div>
            {<TrainSchedule train={train} />}
          </div>
        )}
      </Popup>
    );
  }

  availabilityPopup(trigger, train) {
    return (
      <Popup trigger={<button>{trigger}</button>} modal closeOnDocumentClick>
        {close => (
          <div className="popup">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header">Seat Availability</div>
            <SeatAvailibility train={train} />
          </div>
        )}
      </Popup>
    );
  }

  render() {
    return (
      this.props.trains.length > 0 && (
        <div className="trainlist-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Train id</th>
                <th>Train Name</th>
                <th>Source</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Destination</th>
                {!this.state.isAdmin && <th>Availability</th>}
                {this.state.isAdmin && <th>Edit</th>}
                {this.state.isAdmin && <th>Delete</th>}
              </tr>
            </thead>
            <tbody>
              {this.props.trains.map((train, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{this.schedulePopup(train.id, train)}</td>
                  <td>{this.schedulePopup(train.name, train)}</td>
                  <td>{train.source}</td>
                  <td>{train.departureTime}</td>
                  <td>{train.arrivalTime}</td>
                  <td>{train.destination}</td>
                  {!this.state.isAdmin && (
                    <td>{this.availabilityPopup("Availability", train)}</td>
                  )}
                  {this.state.isAdmin && (
                    <td>
                      <Link to="/admin/edit_train">
                        <button>Edit</button>
                      </Link>
                    </td>
                  )}
                  {this.state.isAdmin && (
                    <td>
                      <button onClick={() => this.deleteTrain(train.id)}>
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    );
  }
}

export default TrainList;