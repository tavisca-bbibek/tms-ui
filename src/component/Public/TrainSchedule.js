import React from 'react';

class TrainSchedule extends React.Component {
  state = {
    schedule: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      const trainId = this.props.train.trainId;
      // Loat train Schedule
      //Set the state.
  }

  generateStop(stopName, arrivalTime, departureTime) {
    return { stopName, arrivalTime, departureTime };
  }

  render() {
    return (
      <div>
        <div>
            <span>{this.props.train.trainId}</span>
            <span>{this.props.train.trainName}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Station Name</th>
              <th>Arrival Time</th>
              <th>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.schedule.map((station, index) => (
              <tr>
                <td>{index}</td>
                <td>{station.stopName}</td>
                <td>{station.arrivalTime}</td>
                <td>{station.departureTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TrainSchedule;