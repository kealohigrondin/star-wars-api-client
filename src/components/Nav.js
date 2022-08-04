import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="ui secondary menu" style={{paddingBottom: '2em'}}>
      <Link to='/' className="item">Home</Link>
      <Link to='/planets' className="item">Planets</Link>
      <Link to='/people' className="item">People</Link>
      <Link to='/species' className="item">Species</Link>
      <Link to='/starships' className="item">Starships</Link>
      <Link to='vehicles' className="item">Vehicles</Link>
    </div>
  );
}
