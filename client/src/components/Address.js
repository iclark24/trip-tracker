import React, { Component } from "react";
import { Segment, Item, Button, Icon } from "semantic-ui-react";
import AddressForm from "./AddressForm";

// ({id, street, city, state, zip, updateAddress, deleteAddress })

class Address extends Component {
  state = {
    editing: false
  };

  //toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    return (
      <div>
        <Segment>
          <Item>
            <Item.Content>
              <Item.Description as="h2" style={{ marginLeft: "15px" }}>
                {this.props.street}
              </Item.Description>
              <Item.Description style={{ marginLeft: "15px" }}>
                {this.props.city}
              </Item.Description>
              <Item.Description as="h2" style={{ marginLeft: "15px" }}>
                {this.props.state}
              </Item.Description>
              <Item.Description as="h2" style={{ marginLeft: "15px" }}>
                {this.props.zip}
              </Item.Description>
              <Item.Extra>
                <Button
                  icon
                  color="red"
                  size="mini"
                  onClick={() => this.props.deleteAddress(this.props.id)}
                  style={{ marginLeft: "15px" }}
                >
                  <Icon name="trash" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>
      </div>
    );
  }
}

export default Address;
