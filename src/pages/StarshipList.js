import React from "react";
import { connect } from "react-redux";
import { getStarships } from "../actions";

class StarshipList extends React.Component {
  render() {
    return <h1>StarshipList</h1>;
  }
}

export default connect(null, { getStarships })(StarshipList);
