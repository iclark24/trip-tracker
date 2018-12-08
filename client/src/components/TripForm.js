import React from 'react';
import { Form, } from "semantic-ui-react";

class TripForm extends React.Component {
  state = { name: '', start_date:"", end_date:"" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTrip(this.state.name, this.state.start_date, this.state.end_date);
    this.setState({ name: '', start_date:"", end_date:""  })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Trip"
          placeholder="Add A Trip"
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Start Date"
          placeholder=""
          required
          type="datetime-local"
          name="start_date"
          value={this.state.start_date}
          onChange={this.handleChange}
        />
        <Form.Input
          label="End Date"
          placeholder=""
          required
          type="datetime-local"
          name="end_date"
          value={this.state.end_date}
          onChange={this.handleChange}
        />
        <Form.Button color="green">Submit</Form.Button>

      </Form>
    )
  }
}

export default TripForm;