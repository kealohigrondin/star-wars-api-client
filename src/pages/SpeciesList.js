import React from "react";
import { connect } from "react-redux";
import { getSpecies } from "../actions";

class SpeciesList extends React.Component {
  render() {
    return <h1>SpeciesList</h1>;
  }
}

export default connect(null, { getSpecies })(SpeciesList);
