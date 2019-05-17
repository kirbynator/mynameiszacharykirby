import React from "react";

const SWAPI = props => {
  return (
    <div
      style={{
        backgroundImage:
          "url('http://chandra.harvard.edu/photo/2009/galactic/galactic.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <h1>SWAPI</h1>
      <h3 style={{ margin: "3%" }}>
        Ever wanted to know where your favorite Star Wars charater is from? Well
        my SWAPI project is for you! I used the API found at{" "}
        <a href="https://swapi.co">https://swapi.co </a> and the pictures are
        pulled from wikipeda.
      </h3>
    </div>
  );
};
export default SWAPI;
