import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import {deleteDataUser, getUsersList} from "../actions/UserAction";

import { connect } from "react-redux";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }
  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}
export default connect()(HomeContainer);
