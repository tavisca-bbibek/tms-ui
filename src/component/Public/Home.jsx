import React, {Component} from 'react';
import Search from './Search';
import TrainList from './TrainList';


class Home extends Component {
    state = {
      trains: [{
        id: 1,
        name: 'Khatarnak Train',
        source: "mera source",
        destination: 'Tera destination',
        arrivalTime: '12:30',
        departureTime: '12:30'
      }]

    }

    constructor(props){
        super(props);
        this.loadTrains = this.loadTrains.bind(this);
    }

    loadTrains(trainCriteria){
      //Make an API call to get trains with the given criteria.
    }

    render(){
        return (
          <div>
            <Search search={this.loadTrains} />
            <TrainList trains={this.state.trains}/>
          </div>
        );
    }
}

export default Home;