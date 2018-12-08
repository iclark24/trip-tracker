import React, { Component } from "react";
import { Segment, Item, Button, Icon } from "semantic-ui-react";
import AddressForm from "./AddressForm";
import Address from "./Address";
import axios from "axios";

class Location extends Component {
  state = {
    address: [],
    editing: false
  };

  componentDidMount() {
    axios
      .get(`/api/locations/${this.props.id}/addresses`)
      .then(res => {
        this.setState({ address: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addAddress = (street, city, state, zip) => {
    axios
      .post(`/api/locations/${this.props.id}/addresses`, {
        street,
        city,
        state,
        zip
      })
      .then(fresh => {
        this.setState({ address: [fresh.data] });
      });
  };

  updateTrip = id => {
    // TODO make api call to update address
    // TODO update state
  };

  deleteTrip = id => {
    // TODO make api call to delete address
    // TODO remove it from state
  };

  // toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    return (
      <div>
        <Segment>
          <Item>
            <Item.Content>
              <Item.Header as="h2" style={{ marginLeft: "15px" }}>
                {this.props.name}
              </Item.Header>
              <Item.Description style={{ marginLeft: "15px" }}>
                {this.props.days}
              </Item.Description>
              <Item.Extra>
                <Button
                  icon
                  color="red"
                  size="mini"
                  onClick={() => this.props.deleteLocation(this.props.id)}
                  style={{ marginLeft: "15px" }}
                >
                  <Icon name="trash" />
                </Button>
              </Item.Extra>
              <Segment>
                <AddressForm addAddress={this.addAddress} />
                <br />
                <br />
                <Address
                  address={this.state.address}
                  updateAddress={this.updateAddress}
                  deleteAddress={this.deleteAddress}
                />
              </Segment>
            </Item.Content>
          </Item>
        </Segment>
      </div>
    );
  }
}

export default Location;
