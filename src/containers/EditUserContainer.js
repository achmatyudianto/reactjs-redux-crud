import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { getUserDetail, putUserUpdate } from "../actions/UserAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.errorResponseDataUser) {
        swal("Failed!", this.props.errorResponseDataUser, "error");
      } else {
        swal(
          "User Updated!",
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
        <h3>Edit User</h3>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);
