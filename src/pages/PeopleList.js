import React from "react";
import { connect } from "react-redux";
import { getPeople } from "../actions";

class PeopleList extends React.Component {
  render() {
    return <h1>PeopleList</h1>;
  }
}

export default connect(null, { getPeople })(PeopleList);
