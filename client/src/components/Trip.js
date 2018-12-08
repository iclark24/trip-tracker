import React, {Component} from 'react';
import {Header, Button, Icon} from "semantic-ui-react"


// ({ id, name, start_date, end_date, updateTrip, deleteTrip })

class Trip extends Component {

  render () {
    return (
      <div>
        <div>
        <div className="center">
            <Header as="h2" style={{ marginLeft: "15px" }}>{ this.props.name }</Header>
            <Header as="h2" style={{ marginLeft: "15px" }}>{ this.props.start_date }</Header>
            <Header as="h2" style={{ marginLeft: "15px" }}>{ this.props.end_date }</Header>
        </div>
        <Button 
          icon 
          color="red" 
          size="tiny" 
          onClick={() => this.props.deleteTrip(this.props.id)} 
          style={{ marginLeft: "15px", }}
        >
          <Icon name="trash" />
        </Button>
        </div>
      </div>
    )
  }
}


export default Trip;