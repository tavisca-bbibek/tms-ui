import React, {Component} from 'react';

import EditStop from './EditStop';

class EditTrain extends Component {
  state = this.getEmptyState();

  constructor(props) {
    super(props);
    this.handleChangeTrainId  = this.handleChangeTrainId .bind(this);
    this.handleChangeTrainName  = this.handleChangeTrainName .bind(this);
    this.addTrain = this.addTrain.bind(this);
    this.insertStop = this.insertStop.bind(this);
    this.deleteStop = this.deleteStop.bind(this);
    this.handleChangeStopName  = this.handleChangeStopName .bind(this);
  }

  getEmptyState() {
    return {
      trainId: "",
      trainName: "",
      stops: [this.getEmptyStop(), this.getEmptyStop()]
    };
  }

  getEmptyStop() {
    return {
      name: "",
      arrivalDate: "",
      arrivalTime: "",
      departureTime: "",
      departureDate: ""
    };
  }

  handleChangeTrainId (event) {
    const trainId = event.target.value;
    this.setState({ trainId });
  }

  handleChangeTrainName (event) {
    const trainName = event.target.value;
    this.setState({ trainName });
  }

  addTrain() {
    //TODO: make an api call.
    console.log(this.state);
    this.setState(this.getEmptyState());
  }

  insertStop(index) {
    this.state.stops.splice(index, 0, this.getEmptyStop());
    this.setState({ stops: [...this.state.stops] });
  }

  deleteStop(index) {
    if (this.state.stops.length <= 2) return;

    this.state.stops.splice(index, 1);
    this.setState({ stops: [...this.state.stops] });
  }

  getActions(index) {
    return {
       changeName: newName => this.handleChangeStopName (index, newName),
      changeArrivalDate: newArrivalTime =>
        this.handleChangeTrainArrivalDate (index, newArrivalTime),
      changeArrivalTime: newArrivalDate =>
        this.handleChangeTrainArrivalTime (index, newArrivalDate),
      changeDepartureDate: newDepartureTime =>
        this.handleChangeTrainDepartureDate (index, newDepartureTime),
      changeDepartureTime: newDepartureDate =>
        this.handleChangeTrainDepartureTime (index, newDepartureDate),
      delete: _ => this.deleteStop(index)
    };
  }

  handleChangeStopName (index, name) {
    this.state.stops[index].name = name;
    this.setState({});
  }

  handleChangeTrainArrivalDate (index, newArrivalDate) {
    this.state.stops[index].arrivalDate = newArrivalDate;
    this.setState({});
  }

  handleChangeTrainArrivalTime (index, newArrivalTime) {
    this.state.stops[index].arrivalTime = newArrivalTime;
    this.setState({});
  }

  handleChangeTrainDepartureDate (index, newDepartureDate) {
    this.state.stops[index].departureDate = newDepartureDate;
    this.setState({});
  }

  handleChangeTrainDepartureTime (index, newDepartureTime) {
    this.state.stops[index].departureTime = newDepartureTime;
    this.setState({});
  }

  render() {
    const trainDetails = (
      <div>
        <input
          type="text"
          placeholder="Train Id"
          value={this.state.trainId}
          onChange={this.handleChangeTrainId }
        />
        <input
          type="text"
          placeholder="Train name"
          value={this.state.trainName}
          onChange={this.handleChangeTrainName }
        />
      </div>
    );

    const trainRoute = (
      <div>
        {this.state.stops.map((stop, index) => (
          <div className="stop-with-controls">
            {index === 0 ? (
              <div>
                <EditStop
                  placeholder="Source"
                  {...stop}
                  actions={this.getActions(index)}
                ></EditStop>
                <button onClick={() => this.insertStop(index + 1)}>+</button>
              </div>
            ) : index === this.state.stops.length - 1 ? (
              <EditStop
                placeholder="Destination"
                {...stop}
                actions={this.getActions(index)}
              ></EditStop>
            ) : (
              <div>
                <EditStop
                  placeholder={`Stop ${index}`}
                  {...stop}
                  actions={this.getActions(index)}
                ></EditStop>
                <button onClick={() => this.insertStop(index + 1)}>+</button>
              </div>
            )}
          </div>
        ))}
      </div>
    );

    return (
      <div className="admin-container">
        {trainDetails}
        {trainRoute}
        <span>{`Number of stops: ${this.state.stops.length - 2}`}</span>
        <button onClick={this.addTrain}>Add</button>
      </div>
    );
  }
}

export default EditTrain;