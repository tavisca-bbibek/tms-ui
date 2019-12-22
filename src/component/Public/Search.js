import React from 'react'
import { Link } from 'react-router-dom';

import NavBar from './NavBar';

class Search extends React.Component {

  state = {
    source: "",
    destination: "",
    date: ""
  };
  
  constructor(props) {
    super(props);
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleDestChange = this.handleDestChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleSourceChange(event) {
    this.setState({ source: event.target.value });
  }

  handleDestChange(event) {
    this.setState({ destination: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  search(){
    const trainCriteria = {...this.state};
    this.props.search(trainCriteria);
  }

  getDateString(date){
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }

  render() {
    const now = new Date();
    const afterOneWeek = new Date();
    afterOneWeek.setDate(now.getDate() + 7);
    console.log(afterOneWeek);
    return (
      <div>
        <div>
          <label>Source:</label>
          <input
            placeholder="Source"
            value={this.state.source}
            required
            ref="source"
            onChange={this.handleSourceChange}
          />
          <br />
          <label htmlFor="destination">Destination:</label>
          <input
            placeholder="Destination"
            value={this.state.destination}
            required
            name="destination"
            onChange={this.handleDestChange}
          />
          <br />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            required
            value={this.state.date}
            min={this.getDateString(now)}
            max={this.getDateString(afterOneWeek)}
            onChange={this.handleDateChange}
          />
          <br />
            <button onClick={this.search}>Search</button>
        </div>
      </div>
    );
  }
}
export default Search