import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { postUserCreate } from "../actions/UserAction";
import { BackComponent } from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.errorResponseDataUser) {
        swal("Failed!", this.props.errorResponseDataUser, "error");
      } else {
        swal(
          "User Created!",
          "Nama : " +
            this.props.getResponseDataUser.nama +
            "Umur : " +
            this.props.getResponseDataUser.umur,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h3>Create User</h3>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
