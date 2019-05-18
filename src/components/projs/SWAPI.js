import React from "react";
import { Card, Image } from "semantic-ui-react";

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
      <div
        id="gridHolder"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <Card>
          <Image src={require(`../stawi/characters/5.jpg`)} />
          <Card.Content>
            <Card.Header>Leia Organa</Card.Header>
            <Card.Description>
              Leia Organa's Home Planet Is Alderaan
            </Card.Description>
          </Card.Content>
        </Card>
        <div>
          <Image src={require(`../stawi/planets/5.jpg`)} />
          <h1>Alderaan</h1>
        </div>
      </div>
    </div>
  );
};
export default SWAPI;
