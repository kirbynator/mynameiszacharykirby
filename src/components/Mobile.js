import React from "react";
import Rpdf from "../ResumeZacharyKirby.pdf";
import ProjectsM from "./ProjectsM";
import { Header, Button, Image } from "semantic-ui-react";
import logo from "./Asset_1.svg";

class Home extends React.Component {
  state = { resize: window.innerWidth, r: "+", p: "+", a: "+" };

  about() {
    if (this.state.a === "-") {
      return (
        <div style={{ backgroundColor: "#A87550", color: "white" }}>
          <div style={{ padding: "3%" }}>
            <section>
              <p>
                {" "}
                If you can't tell from the website, my name is Zachary Kirby. A
                little about me. I am 21 years old. I graduated from Herriman
                High in 2015. Afterwards, I served an LDS mission in the
                California Roseville mission. Upon returning home, I graduated
                form the University of Utahs Web Development Program.
              </p>
              <break />
            </section>
            <section>
              <h3>Nicknames</h3>
              <ul>
                <li>
                  {" "}
                  I go by Kirby pretty often. Too many Zachs in the world.
                </li>
                <li> Kirbynator is my online name a lot of the time.</li>
                <li> Kirbstomp is my street name.</li>
                <li>
                  {" "}
                  Others include: Kirb, Kirbs, Kirbster, Zac-man-do, Zarahemena,
                  and Zacharias.
                </li>
                <li> Just dont call me late for dinner.</li>
              </ul>
            </section>
            <section>
              <h3>Interests</h3>
              <ul>
                <li>
                  {" "}
                  Traveling. I have been all over the west coast and east coast,
                  while sneaking some middle states in on the way.
                </li>
                <li>
                  {" "}
                  Super Smash Brothers. I have competed in tournaments, both
                  here in Utah and in California.
                </li>
                <li>
                  {" "}
                  Table Top Games. My favorites are Clue, Settlers of Catan, and
                  Magic: the Gathering.
                </li>
                <li> Designer Socks. I am an addict of six years now.</li>
                <li>
                  {" "}
                  Outdoors Stuff. I will allways say yes to hiking or boating.
                </li>
                <li> Reading. My favorite author is Brandon Sanderson.</li>
                <li>
                  {" "}
                  Music. I will always be bumpin. Fav artists are Gorillaz and
                  Awolnation.
                </li>
              </ul>
            </section>
            <section>
              <h3>Dislikes</h3>
              <ul>
                <li> Styrofoam on sytrofoam. Nasty sounding.</li>
                <li> Lasagna. Not great tasting and difficult to spell.</li>
                <li> Chapstick. It's a conspiricy man, I'm telling you.</li>
              </ul>
            </section>
          </div>
        </div>
      );
    }
  }

  resume() {
    if (this.state.r === "-") {
      return (
        <div>
          <Image src="https://imgur.com/KetwEQd.png" />
          <a
            id="dl"
            href={Rpdf}
            type="application/pdf"
            download="ZacharyKirbyResume"
          >
            <Button fluid style={{ marginBottom: "0px" }}>
              Download
            </Button>
          </a>
        </div>
      );
    }
  }

  render() {
    document.body.style = "background: #fff";
    return (
      <div style={{ width: "100%", height: window.innerHeight }}>
        <div
          style={{
            backgroundColor: "#DFC7C1",
            width: "100%",
            height: "35%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={require("./Asset_1.svg")}
            alt="Logo"
          />
        </div>
        <div
          style={{
            backgroundColor: "#F4DCD6",
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Header as="h3" style={{ color: "#fff" }}>
            Well what are you here for?
          </Header>
        </div>
        <div
          style={
            this.state.r === "-"
              ? {
                  backgroundColor: "#B2D9EA",
                  width: "100%",
                  height: 50,
                  textAlign: "center"
                }
              : {
                  backgroundColor: "#B2D9EA",
                  width: "100%",
                  height: "20%",
                  textAlign: "center"
                }
          }
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
        <div
          style={
            this.state.p === "-"
              ? {
                  backgroundColor: "#84B4C8",
                  width: "100%",
                  height: 50,
                  textAlign: "center"
                }
              : {
                  backgroundColor: "#84B4C8",
                  width: "100%",
                  height: "20%",
                  textAlign: "center"
                }
          }
          onClick={() =>
            this.state.p === "+"
              ? this.setState({ p: "-" })
              : this.setState({ p: "+" })
          }
        >
          <Header as="h3" style={{ color: "#fff", paddingTop: 12 }}>
            {`Projects ${this.state.p}`}
          </Header>
        </div>
        {this.state.p === "-" ? <ProjectsM /> : null}
        <div
          style={
            this.state.a === "-"
              ? {
                  backgroundColor: "#619196",
                  width: "100%",
                  height: 50,
                  textAlign: "center"
                }
              : {
                  backgroundColor: "#619196",
                  width: "100%",
                  height: "20%",
                  textAlign: "center"
                }
          }
          onClick={() =>
            this.state.a === "+"
              ? this.setState({ a: "-" })
              : this.setState({ a: "+" })
          }
        >
          <Header as="h3" style={{ color: "#fff", paddingTop: 12 }}>
            {`About Me ${this.state.a}`}
          </Header>
        </div>
        {this.about()}
      </div>
    );
  }
}
export default Home;
