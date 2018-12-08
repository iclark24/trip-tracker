import React from 'react';
import { Form, } from "semantic-ui-react";

class LocationForm extends React.Component {
  state = { name: '', days: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLocation(this.state.name, this.state.days);
    this.setState({ name: '', days: ""  })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Location"
          placeholder="Add A Location"
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Days"
          placeholder="0"
          required
          type="number"
          name="days"
          value={this.state.days}
          onChange={this.handleChange}
        />
        <Form.Button color="green">Submit</Form.Button>

      </Form>
    )
  }
}

export default LocationForm;