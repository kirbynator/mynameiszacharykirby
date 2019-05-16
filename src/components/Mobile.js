import React from "react";
import Rpdf from "../ResumeZacharyKirby.pdf";
import { Header } from "semantic-ui-react";

class Home extends React.Component {
  state = { r: "+" };

  resume() {
    if (this.state.r === "+") {
      return (
        <div style={{ width: window.innerWidth }}>
          <object
            style={{ width: window.innerWidth }}
            data={Rpdf}
            type="application/pdf"
          >
            <embed src={Rpdf} type="application/pdf" />
          </object>
        </div>
      );
    }
  }

  render() {
    document.body.style = "background: #fff";
    return (
      <div style={{ width: window.innerWidth }}>
        <div
          style={{
            backgroundColor: "#DFC7C1",
            width: "100%",
            height: 100,
            textAlign: "center"
          }}
        >
          <Header as="h1" style={{ color: "#fff", paddingTop: 32 }}>
            My Name Is Zachary Kirby
          </Header>
        </div>
        <div
          style={{
            backgroundColor: "#F4DCD6",
            width: "100%",
            height: 50,
            textAlign: "center"
          }}
        >
          <Header as="h3" style={{ color: "#fff", paddingTop: 12 }}>
            Well what are you here for?
          </Header>
        </div>
        <div
          style={{
            backgroundColor: "#B2D9EA",
            width: "100%",
            height: 50,
            textAlign: "center"
          }}
          onClick={() =>
            this.state.r === "+"
              ? this.setState({ r: "-" })
              : this.setState({ r: "+" })
          }
        >
          <Header as="h3" style={{ color: "#fff", paddingTop: 12 }}>
            {`Resume ${this.state.r}`}
          </Header>
        </div>
        {this.resume()}
      </div>
    );
  }
}
export default Home;
