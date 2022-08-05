import React from "react";
import { connect } from "react-redux";
import { getPeople } from "../actions";
import Table from "../components/Table";

class PeopleList extends React.Component {
  componentDidMount() {
    this.props.getPeople();
    console.log(this.props.people);
  }

  renderTableHeaders = () => {
    
  };

  render() {
    // if (this.props.people.length < 1) return <h1>loading planets...</h1>;
    return (
      <div>
        <h1>People of Star Wars</h1>
        {/* <Table
          renderTableHeaders={this.renderTableHeaders}
          renderTableBody={this.renderTableBody}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Object.values parses out the objects from the values of the KV pairs in state.planets
  return {
    people: Object.values(state.people),
  };
};
export default connect(mapStateToProps, { getPeople })(PeopleList);
