import React, {Component} from 'react';
import {Header, Button, Icon} from "semantic-ui-react"
import LocationForm from './LocationForm';


// ({ id, name, start_date, end_date, updateTrip, deleteTrip })

class Trip extends Component {
  state = { editing: false };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    return (
      <div>
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
          </Item.Content>
        </Item>
      </div>
    );
  }
}

export default Trip;
