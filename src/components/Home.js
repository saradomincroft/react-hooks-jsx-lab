import React from "react";
import { name, city } from "../data/data";

const divStyle = { color: "firebrick" };

function Home() {
  return (
    <div id="home">
      <h1 style={divStyle}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
