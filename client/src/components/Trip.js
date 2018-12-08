import React, {Component} from 'react';
import {Segment, Item, Button, Icon} from "semantic-ui-react"
import LocationForm from './LocationForm';
import Locations from "./Locations"
import axios from "axios"


// ({ id, name, start_date, end_date, updateTrip, deleteTrip })

class Trip extends Component {
  state = { 
    locations:[],
    editing: false };

  componentDidMount() {
    axios.get(`/api/trips/${this.props.id}/locations`)
      .then( res => {
        this.setState({ locations: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
    
      

  addLocation = (name, days) => {
    axios.post(`/api/trips/${this.props.id}/locations`, { name, days })
    .then( fresh => {
      const { locations } = this.state;
      this.setState({ locations: [...locations, fresh.data] });
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


  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    return (
      <div>
        <Segment>
          <Item>
            <Item.Content>
                <Item.Header as="h2" style={{ marginLeft: "15px" }}>{ this.props.name }</Item.Header>
                <Item.Description style={{ marginLeft: "15px" }}>{ this.props.start_date }</Item.Description>
                <Item.Description style={{ marginLeft: "15px" }}>{ this.props.end_date }</Item.Description>
              <Item.Extra>
                <Button 
                  icon 
                  color="red" 
                  size="mini" 
                  onClick={() => this.props.deleteTrip(this.props.id)} 
                  style={{ marginLeft: "15px", }}
                  >
                  <Icon name="trash" />
                </Button>
              </Item.Extra>
                <Segment>
                  <LocationForm addLocation={this.addLocation} />
                  <br />
                  <br />
                  <Locations
                    locations={this.state.locations}
                    updateLocation={this.updateLocation}
                    deleteLocation={this.deleteLocation}
                    />
                </Segment>
            </Item.Content>
          </Item>
      </Segment>
      </div>
    );
  }
}

export default Trip;
