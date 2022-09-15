import React from "react";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <div className="ui input">
        <input id="planetName" placeholder="Planet Name" type="text"></input>
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </>
  );
}
