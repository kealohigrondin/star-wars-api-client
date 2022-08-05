import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Table from "../components/Table";
import { getPlanets } from "../actions";
import { GET_PLANETS_ERROR } from "../actions/types";
import formatString from "../helpers/formatString";

class PlanetList extends React.Component {
  componentDidMount() {
    this.props.getPlanets();
  }

  calcWaterSurfaceArea(diameter, surface_water) {
    if (diameter === "unknown" || surface_water === "unknown") return "?";
    const surfaceArea = 4 * Math.PI * ((diameter / 2) ^ 2);
    return Math.floor((surface_water * surfaceArea) / 100);
  }

  renderTableHeaders = () => {
    return (
      <tr>
        <th>Planet Name</th>
        <th>Climate</th>
        <th>Residents</th>
        <th>Climates</th>
        <th>Population</th>
        <th>Water Surface Area (km^2)</th>
      </tr>
    );
  };

  renderTableBody = () => {
    return this.props.planets.map((planet) => {
      return (
        <tr key={planet.name}>
          <td>
            <Link to={`/planets/${planet.name}`} >{planet.name}</Link>
          </td>
          <td>{formatString(planet.climate)}</td>
          <td>{formatString(planet.residents.length)}</td>
          <td>{formatString(planet.terrain)}</td>
          <td>{formatString(planet.population)}</td>
          <td>
            {formatString(
              this.calcWaterSurfaceArea(planet.diameter, planet.surface_water)
            )}
          </td>
        </tr>
      );
    });
  };

  render() {
    if (this.props.planets[0] === GET_PLANETS_ERROR) {
      return <h1>{GET_PLANETS_ERROR}</h1>;
    }
    if (this.props.planets.length < 1) return <h1>loading planets...</h1>;
    return (
      <div>
        <h2>Planets of STAR WARS</h2>
        <Table
          renderTableHeaders={this.renderTableHeaders}
          renderTableBody={this.renderTableBody}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Object.values parses out the objects from the values of the KV pairs in state.planets
  return {
    planets: Object.values(state.planets),
  };
};
export default connect(mapStateToProps, { getPlanets })(PlanetList);
