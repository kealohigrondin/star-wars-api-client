import React from "react";
import { useParams } from "react-router-dom";

function PlanetDetails() {
  let params = useParams();
  console.log(params);
  return <h1>Planet Details for {params.planetName}</h1>;
}

export default PlanetDetails;
