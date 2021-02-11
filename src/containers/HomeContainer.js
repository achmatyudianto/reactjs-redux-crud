import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import {deleteUserDetail, getUsersList} from "../actions/UserAction";

import { connect } from "react-redux";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteUserDetail());
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
