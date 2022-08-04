import React from "react";
import { connect } from "react-redux";
import { getFilms } from "../actions";

class FilmList extends React.Component {
  render() {
    return <h1>FilmList</h1>;
  }
}

export default connect(null, { getFilms })(FilmList);
