import React from "react";
import Rpdf from "../ResumeZacharyKirby.pdf";
import ProjectsM from "./ProjectsM";
import { Header, Button, Image } from "semantic-ui-react";
import logo from "./Asset_1.svg";

class Home extends React.Component {
  state = { resize: window.innerWidth, r: "+", p: "+", a: "+" };

  yearsAgo = (date) => {
    const currentDate = new Date();
    const inputDate = new Date(date);

    const differenceInMilliseconds = currentDate - inputDate;
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Including leap years

    return Math.floor(differenceInMilliseconds / millisecondsPerYear);
  }

  about() {
    if (this.state.a === "-") {
      return (
        <div style={{ backgroundColor: "#A87550", color: "white" }}>
          <div style={{ padding: "3%" }}>
            <section>
              <p>
                {" "}
                Hello! Welcome to my website. My name is Zach Kirby. I go by Kirby pretty often. Too many Zachs in the world. I have been a software developer for {this.yearsAgo('2020-04-01')} years, both as a hobby and professionally.
                Professionally I am a full stack web developer. I have had the oppertunity wear many hats do that and enjoy learning the tech that comes with them.
                As a hobby I do video game development. I do weekend competitions, called game jams, once in a while. Mostly I work on my first commercial game. 
                Some non-code relatived things about me.
                I am {this.yearsAgo('1997-05-30')} years old. I grew up in South Jordan, UT and graduated from
                High School in 2015. Afterwards, I served an LDS mission in
                the California Roseville mission. Upon returning home, I
                graduated form the University of Utahs Web Development Program.
              </p>              
              <break />
            </section>
            <section>
                <h3>Interests</h3>
                <ul>
                  <li>
                    {" "}
                    Traveling. I have been all over the west coast and east
                    coast, while sneaking some middle states and Japan in on the way.
                  </li>
                  <li>
                    {" "}
                    Super Smash Brothers. I have competed in tournaments, both
                    here in Utah and in California.
                  </li>
                  <li>
                    {" "}
                    Game Design. Both tabletop and videogames. Check out the short games I've made <a target="_blank" href="https://kirbynator.itch.io/">here</a> and <a target="_blank" href="https://kirbynator.github.io/BugJarBattles/">here</a>.
                  </li>
                  <li>
                    {" "}
                    Outdoors Stuff. I will allways say yes to hiking or boating. I also have a Jeep I'll take off-roading
                  </li>
                  <li> Reading. My favorite author is Brandon Sanderson.</li>
                  <li>
                    {" "}
                    Music. My favorite artists are Gorillaz and The Midnight. I also go to concerts quite often!
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
          <object
              style={{
                width: "100%",
                height: "75em",
                marginTop: "3%"
              }}
              data={Rpdf}
              type="application/pdf"
            >
              <embed src={Rpdf} type="application/pdf" />
            </object>
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
