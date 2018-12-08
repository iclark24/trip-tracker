import React from "react";
import { Form } from "semantic-ui-react";

class AddressForm extends React.Component {
  state = { street: "", city: "", state: "", zip: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addAddress(
      this.state.street,
      this.state.city,
      this.state.state,
      this.state.zip
    );
    this.setState({ street: "", city: "", state: "", zip: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Street"
          placeholder="Add A Street"
          required
          name="street"
          value={this.state.street}
          onChange={this.handleChange}
        />
        <Form.Input
          label="City"
          placeholder="Add A City"
          required
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <Form.Input
          label="State"
          placeholder="Add A State"
          required
          name="state"
          value={this.state.state}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Zip"
          placeholder="Add A Zip"
          required
          name="zip"
          type="number"
          value={this.state.zip}
          onChange={this.handleChange}
        />
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    );
  }
}

export default AddressForm;
