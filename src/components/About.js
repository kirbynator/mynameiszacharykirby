import React from "react";
import { Input, Image } from "semantic-ui-react";

class About extends React.Component {
  state = { go: true, top: -606, left: -32, art: 0, test: window.innerHeight };

  componentDidMount() {
    if (this.state.go === true) {
      this.setState({
        go: false,
        pos: 0,
        art: 7,
        r: setInterval(this.moveRight, 27)
      });
    }
  }

  yearsAgo = (date) => {
    const currentDate = new Date();
    const inputDate = new Date(date);

    const differenceInMilliseconds = currentDate - inputDate;
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Including leap years

    return Math.floor(differenceInMilliseconds / millisecondsPerYear);
}

  handleKeyPress = event => {
    switch (event.key) {
      case "ArrowLeft":
        if (
          (this.state.go === true &&
            this.state.top <= -606 &&
            this.state.top >= -638) ||
          (this.state.go === true && this.state.left > 0)
        ) {
          this.setState({
            go: false,
            pos: 0,
            art: 5,
            l: setInterval(this.moveLeft, 10)
          });
        }
        break;
      case "ArrowRight":
        if ((this.state.go === true) & (this.state.left < 1248)) {
          this.setState({
            go: false,
            pos: 0,
            art: 7,
            r: setInterval(this.moveRight, 10)
          });
        }
        break;
      case "ArrowUp":
        if (this.state.go === true && this.state.top > -702) {
          this.setState({
            go: false,
            pos: 0,
            art: 3,
            u: setInterval(this.moveUp, 10)
          });
        }
        break;
      case "ArrowDown":
        if (this.state.go === true && this.state.top < 64) {
          this.setState({
            go: false,
            pos: 0,
            art: 1,
            d: setInterval(this.moveDown, 10)
          });
        }
        break;
    }
  };

  moveUp = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.u);
      this.setState({ art: 2, go: true });
      this.ender();
    } else {
      this.setState({ pos: this.state.pos + 1, top: this.state.top - 1 });
    }
  };

  moveDown = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.d);
      this.setState({ art: 0, go: true });
      this.ender();
    } else {
      this.setState({ pos: this.state.pos + 1, top: this.state.top + 1 });
    }
  };

  moveLeft = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.l);
      this.setState({ art: 4, go: true });
      this.ender();
    } else {
      this.setState({ pos: this.state.pos + 1, left: this.state.left - 1 });
    }
  };

  moveRight = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.r);
      this.setState({ art: 6, go: true });
      this.ender();
    } else {
      this.setState({ pos: this.state.pos + 1, left: this.state.left + 1 });
    }
  };

  ender() {
    if (this.state.left === 32) {
      switch (this.state.top) {
        case -542:
          document.getElementById("goIN").click();
          break;
        case -478:
          document.getElementById("gogit").click();
          break;
        case -414:
          document.getElementById("goinsta").click();
          break;
        case -350:
          document.getElementById("gotwit").click();
          break;
      }
    } else if (this.state.left < 0) {
      this.props.router("home", -248, 768);
    }
  }

  artPick = () => {
    switch (this.state.art) {
      case 0:
        return "https://piskel-imgstore-b.appspot.com/img/d5d7d3ab-6e2d-11e9-a1bb-6599fce8ec5e.gif";
        break;
      case 1:
        return "https://piskel-imgstore-b.appspot.com/img/f664b1e3-7071-11e9-8140-17cb9e5efa62.gif";
        break;
      case 2:
        return "https://piskel-imgstore-b.appspot.com/img/3393eeca-6e8a-11e9-878d-2b24b27d7b3d.gif";
        break;
      case 3:
        return "https://piskel-imgstore-b.appspot.com/img/3e83e5c7-7072-11e9-b22b-17cb9e5efa62.gif";
        break;
      case 4:
        return "https://piskel-imgstore-b.appspot.com/img/fa14edf0-6f88-11e9-b343-41b4fe1e4491.gif";
        break;
      case 5:
        return "https://piskel-imgstore-b.appspot.com/img/c6068eb8-6f8a-11e9-a938-41b4fe1e4491.gif";
        break;
      case 6:
        return "https://piskel-imgstore-b.appspot.com/img/4edeaa3a-6f89-11e9-8d7b-41b4fe1e4491.gif";
        break;
      case 7:
        return "https://piskel-imgstore-b.appspot.com/img/ed8a9378-6f8a-11e9-bebf-41b4fe1e4491.gif";
        break;
    }
  };

  onBlur = () => {
    this.setState({ focused: false });
  };
  onFocus = () => {
    this.setState({ focused: true });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "1280px",
            height: "800px",
            backgroundImage:
              "url('https://piskel-imgstore-b.appspot.com/img/169b829e-75c2-11e9-b2f3-fffdc3a66250.gif')"
          }}
        >
          <Input
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value="Click Here"
            autoFocus
            style={
              this.state.focused
                ? { opacity: "0", position: "relative" }
                : { position: "relative", left: "600px" }
            }
            type="text"
            id="one"
            onKeyDown={this.handleKeyPress}
          />
          <div
            style={{
              backgroundColor: "#fff",
              margin: "5%",
              marginTop: "-1%",
              marginLeft: "7%",
              borderRadius: "5px"
            }}
          >
            <div
              style={{
                margin: "15px",
                fontWeight: "50px",
                fontSize: "20px",
                color: "#46878f",
                textShadow:
                  "-1px -1px 0 #332c50, -1px -1px 0 #332c50, -1px -1px 0 #332c50, -1px -1px 0 #332c50"
              }}
            >
              <section>
                <h1>Zachary Kirby</h1>
                <p>
                  {" "}
                  Hello! Welcome to my website. My name is Zach Kirby. I go by Kirby pretty often. Too many Zachs in the world. I have been a software developer for {this.yearsAgo('2020-04-01')} years, both as a hobby and professionally.
                  Professionally I am a full stack web developer. I have had the oppertunity wear many hats do that and enjoy learning the tech that comes with them.
                  As a hobby I do video game development. I do weekend competitions, called game jams, once in a while. Mostly I work on my first commercial game. 
                  Some non-code relatived things about me.
                  I am {this.yearsAgo('1997-05-30')} years old. I grew up in South Jordan, UT and graduated from
                  High School in 2015. Afterwards, I served an LDS mission in
                  the California Roseville mission. Upon returning home, I
                  graduated form the University of Utahs Web Development
                  Program.
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
                  <li> Styrofoam on styrofoam. Nasty sounding.</li>
                  <li> Lasagna. Not great tasting and difficult to spell.</li>
                  <li> Chapstick. It's a conspiricy man, I'm telling you.</li>
                </ul>
              </section>
            </div>
          </div>
          <Image
            src={this.artPick()}
            alt="Guy"
            style={{
              zIndex: "1",
              position: "relative",
              top: `${this.state.top}px`,
              left: `${this.state.left}px`
            }}
          />
          <Image
            src="https://piskel-imgstore-b.appspot.com/img/400dc0b0-7040-11e9-91d5-d18bb623238e.gif"
            alt="Rug"
            style={{
              height: "64px",
              width: "32px",
              zIndex: "0",
              position: "relative",
              top: `-658px`,
              left: `0px`
            }}
          />

          <a
            href="https://www.linkedin.com/in/zacharykirby11/"
            target="_blank"
            id="goIN"
            style={{
              position: "relative",
              top: `-626px`,
              left: `32px`,
              width: "32px"
            }}
          >
            <Image
              src="https://piskel-imgstore-b.appspot.com/img/74b54621-7684-11e9-852a-db9806cff2df.gif"
              alt="LinkedIn"
              style={{
                height: "32px",
                width: "32px",
                zIndex: "0"
              }}
            />
          </a>
          <a
            href="https://github.com/kirbynator/"
            target="_blank"
            id="gogit"
            style={{
              position: "relative",
              top: `-594px`,
              left: `32px`,
              width: "32px"
            }}
          >
            <Image
              src="https://piskel-imgstore-b.appspot.com/img/73f40a80-759f-11e9-8933-1150286e7278.gif"
              alt="GitHub"
              style={{
                height: "32px",
                width: "32px",
                zIndex: "0"
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/kirbynator"
            target="_blank"
            id="goinsta"
            style={{ position: "relative", top: `-562px`, left: `32px` }}
          >
            <Image
              src="https://piskel-imgstore-b.appspot.com/img/a059d32e-7682-11e9-94c6-db9806cff2df.gif"
              alt="Instagram"
              style={{
                height: "32px",
                width: "32px",
                zIndex: "0"
              }}
            />
          </a>
          <a
            href="https://twitter.com/iAmKirbynator"
            target="_blank"
            id="gotwit"
            style={{
              position: "relative",
              top: `-530px`,
              left: `32px`,
              width: "32px"
            }}
          >
            <Image
              src="https://piskel-imgstore-b.appspot.com/img/dfd84323-7683-11e9-9c7e-db9806cff2df.gif"
              alt="Twitter"
              style={{
                height: "32px",
                width: "32px",
                zIndex: "0"
              }}
            />
          </a>
        </div>
      </div>
    );
  }
}
export default About;
