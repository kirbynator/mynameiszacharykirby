import React from "react";
import Query from "./projs/Query";
import SWAPI from "./projs/SWAPI";
import { Header, Button, Image } from "semantic-ui-react";

class PM extends React.Component {
  state = { q: "+" };

  doesnothing(x) {
    console.log(x);
  }

  linker = x => {
    window.location.href = x;
  };
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
            onClick={() => this.linker("https://github.com/devpointlabs/query")}
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
      </div>
    );
  }
}
export default PM;
