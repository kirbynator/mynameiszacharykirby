import React from "react";
import Query from "./projs/Query";
import SWAPI from "./projs/SWAPI";
import Utoob from "./projs/Utoob";
import { Header, Button, Image } from "semantic-ui-react";

class PM extends React.Component {
  state = { q: "+", s: "+", u: "+" };

  doesnothing(x) {
    console.log(x);
  }

  linker = x => {
    window.location.href = x;
  };

  utoob() {
    return (
      <div>
        <Utoob toogle={this.doesnothing} />
        <Button
          fluid
          onClick={() =>
            this.linker("https://github.com/kirbynator/hackathon_2?files=1")
          }
        >
          GitHub
        </Button>
      </div>
    );
  }

  swapi() {
    return (
      <div>
        <SWAPI />
        <Button.Group style={{ width: "100%" }}>
          <Button onClick={() => this.linker("/mynameiszacharykirby/StarWarsApi")}>Visit</Button>
          <Button.Or />
          <Button
            onClick={() =>
              this.linker("https://github.com/kirbynator/SWAPI?files=1")
            }
          >
            GitHub
          </Button>
        </Button.Group>
      </div>
    );
  }
  query() {
    return (
      <div>
        <Query toogle={this.doesnothing} />
        <Button.Group style={{ width: "100%" }}>
          <Button
            onClick={() =>
              this.linker("https://query-dpl.herokuapp.com/register/teacher")
            }
          >
            Visit
          </Button>
          <Button.Or />
          <Button
            onClick={() =>
              this.linker("https://github.com/kirbynator/query?files=1")
            }
          >
            GitHub
          </Button>
        </Button.Group>
      </div>
    );
  }

  render() {
    return (
      <div style={{}}>
        <div
          style={{
            backgroundColor: "#FCBCBC",
            width: "100%",
            height: "65px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() =>
            this.state.q === "+"
              ? this.setState({ q: "-" })
              : this.setState({ q: "+" })
          }
        >
          <Header as="h3" style={{ color: "#fff", paddingTop: "3px" }}>
            {`Query ${this.state.q}`}
          </Header>
        </div>
        {this.state.q === "-" ? this.query() : null}
        <div
          style={{
            backgroundColor: "#DC9787",
            width: "100%",
            height: "65px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() =>
            this.state.s === "+"
              ? this.setState({ s: "-" })
              : this.setState({ s: "+" })
          }
        >
          <Header as="h3" style={{ color: "#fff", paddingTop: "3px" }}>
            {`SWAPI ${this.state.s}`}
          </Header>
        </div>
        {this.state.s === "-" ? this.swapi() : null}
        <div
          style={{
            backgroundColor: "#DA836E",
            width: "100%",
            height: "65px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() =>
            this.state.u === "+"
              ? this.setState({ u: "-" })
              : this.setState({ u: "+" })
          }
        >
          <Header as="h3" style={{ color: "#fff", paddingTop: "3px" }}>
            {`Utoob ${this.state.u}`}
          </Header>
        </div>
        {this.state.u === "-" ? this.utoob() : null}
      </div>
    );
  }
}
export default PM;
