import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPlanet } from "../actions/index";

class PlanetDetails extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.planetName);
    console.log(this.props);
    if (!this.props.planet) {
      console.log("No planet found in redux state");
      //this.props.getPlanet(this.props.match.params.planetName);
    }
  }

  render() {
    if (!this.props.planet) {
      return (
        <div className="ui center aligned container">
          Please navigate to <Link to="/">Home</Link> to choose a planet
        </div>
      );
    }
    return (
      <div style={{ marginTop: "2em" }}>
        <h2>Planet Details for {this.props.match.params.planetName}</h2>
        <div className="ui stackable grid">
          <div className="six wide column">
            <p>Name: {this.props.planet.name}</p>
            <p>Climate: {this.props.planet.climate}</p>
            <p>Diameter: {this.props.planet.diameter}</p>
            <p>Gravity: {this.props.planet.gravity}</p>
            <p>Population: {this.props.planet.population}</p>
            <p>Terrain: {this.props.planet.terrain}</p>
          </div>
          <div className="ten wide column">right column</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { planet: state.planets[ownProps.match.params.planetName] };
};

export default connect(mapStateToProps, { getPlanet })(PlanetDetails);
