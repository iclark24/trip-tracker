import React, { Component } from 'react';
import TripForm from './components/TripForm';
import Trips from './components/Trips';
import { Container, } from "semantic-ui-react";
import axios from "axios"

class App extends Component {
  state = { trips: [], }

  componentDidMount() {
    axios.get("/api/trips")
      .then( res => {
        this.setState({ trips: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
    
      

  addTrip = (name, start_date, end_date) => {
    axios.post('/api/trips', { name, start_date, end_date })
    .then( fresh => {
      const { trips } = this.state;
      this.setState({ trips: [...trips, fresh.data] });
    })
  }

  updateTrip = (id) => {
    // TODO make api call to update todo
    // TODO update state
  }

  deleteTrip = (id) => {
    // TODO make api call to delete todo
    // TODO remove it from state
  }

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <TripForm addTrip={this.addTrip} />
        <br />
        <br />
        <Trips
          trips={this.state.trips}
          updateTrip={this.updateTrip}
          deleteTrip={this.deleteTrip}
        />
      </Container>
    );
  }
}

export default App;