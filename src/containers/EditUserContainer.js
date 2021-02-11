import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";

export default class EditUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h3>Edit User</h3>
      </Container>
    );
  }
}
