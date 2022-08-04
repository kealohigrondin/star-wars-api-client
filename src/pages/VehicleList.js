import React from "react";
import { connect } from "react-redux";
import { getVehicles } from "../actions";

class VehicleList extends React.Component {
  render() {
    return <h1>VehicleList</h1>;
  }
}

export default connect(null, { getVehicles })(VehicleList);
