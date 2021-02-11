import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";

export default class CreateUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h3>Create User</h3>
      </Container>
    );
  }
}
