import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getPlanet } from "../actions/index";
import formatString from "../helpers/formatString";
import Table from "../components/Table";

class PlanetDetails extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.planetName);
    console.log(this.props);
    if (!this.props.planet) {
      console.log("No planet found in redux state");
      //this.props.getPlanet(this.props.match.params.planetName);
    }
  }

  

  renderFilmTableHeader = () => {
    return (
      <tr>
        <th>Films Appeared In</th>
      </tr>
    );
  };

  renderFilmTableBody = () => {
    return this.props.planet.films.map((film) => {
      return (
        <tr key={film}>
          <td>{film}</td>
        </tr>
      );
    });
  };

  renderResidentTableHeader = () => {
    return (
      <tr>
        <th>Residents</th>
      </tr>
    );
  };

  renderResidentTableBody = () => {
    return this.props.planet.residents.map((res) => (
      <tr key={res}>
        <td>{res}</td>
      </tr>
    ));
  };
  
  renderFilmTable() {
    if (this.props.planet.films.count <= 0) {
      return null;
    }
    return (
      <>
        <Table
          renderTableHeaders={this.renderFilmTableHeader}
          renderTableBody={this.renderFilmTableBody}
        />
        <br />
      </>
    );
  }

  renderResidentsTable() {
    if (this.props.planet.residents.length <= 0) {
      return null;
    }
    return (
      <Table
        renderTableHeaders={this.renderResidentTableHeader}
        renderTableBody={this.renderResidentTableBody}
      />
    );
  }

  renderLeftColumn() {
    return (
      <div className="six wide column">
        <h4>Name: {this.props.planet.name}</h4>
        <h4>Climate: {formatString(this.props.planet.climate)}</h4>
        <h4>Diameter: {formatString(this.props.planet.diameter)}</h4>
        <h4>Gravity: {formatString(this.props.planet.gravity)}</h4>
        <h4>Population: {formatString(this.props.planet.population)}</h4>
        <h4>Terrain: {formatString(this.props.planet.terrain)}</h4>
      </div>
    );
  }

  renderRightColumn() {
    return (
      <div className="ten wide column">
        {this.renderFilmTable()}
        {this.renderResidentsTable()}
      </div>
    );
  }

  render() {
    if (!this.props.planet) {
      return (
        <div className="ui center aligned container">
          Please navigate to <Link to="/planets">Planet List</Link> to choose a
          planet
        </div>
      );
    }
    return (
      <div>
        <h2>Planet Details for {this.props.match.params.planetName}</h2>
        <div className="ui stackable grid">
          {this.renderLeftColumn()}
          {this.renderRightColumn()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { planet: state.planets[ownProps.match.params.planetName] };
};

export default connect(mapStateToProps, { getPlanet })(PlanetDetails);
