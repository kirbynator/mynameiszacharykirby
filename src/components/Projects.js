import React from "react";
import { Input, Image } from "semantic-ui-react";
import Query from "./projs/Query";
import BugJarBattles from "./projs/BugJarBattles";
import Utoob from "./projs/Utoob";

class Projects extends React.Component {
  state = {
    go: true,
    top: 44,
    left: -31,
    art: 0,
    focused: true,
    p: "none",
    invis: 1
  };

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

  toogleInv = x => {
    if (x === "y" && this.state.invis === 1) {
      this.setState({ focused: true, invis: 0 });
    } else if (x != "y") {
      this.setState({ invis: 1, focused: false });
    }
  };

  handleKeyPress = event => {
    switch (event.key) {
      case "ArrowLeft":
        if (
          (this.state.go === true &&
            this.state.left > 1 &&
            this.state.left < 513) ||
          (this.state.go === true &&
            this.state.top <= 44 &&
            this.state.top >= 12 &&
            this.state.left < 513) ||
          (this.state.go === true &&
            this.state.left > 513 &&
            this.state.top === -52) ||
          (this.state.go === true && this.state.top === -20)
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
        if (
          (this.state.go === true && this.state.left < 132) ||
          (this.state.go === true && this.state.top === 44) ||
          (this.state.go === true && this.state.top === 108) ||
          (this.state.go === true && this.state.top === 172) ||
          (this.state.go === true &&
            this.state.left > 480 &&
            this.state.left < 1248)
        ) {
          this.setState({
            go: false,
            pos: 0,
            art: 7,
            r: setInterval(this.moveRight, 10)
          });
        }
        break;
      case "ArrowUp":
        if (
          (this.state.go === true && this.state.top >= -32) ||
          (this.state.go === true &&
            this.state.left > 400 &&
            this.state.top > -32)
        ) {
          this.setState({
            go: false,
            pos: 0,
            art: 3,
            u: setInterval(this.moveUp, 10)
          });
        }
        break;
      case "ArrowDown":
        if (
          (this.state.go === true &&
            this.state.top < 652 &&
            this.state.left < 162) ||
          (this.state.go === true &&
            this.state.top < -32 &&
            this.state.left > 400)
        ) {
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
      if (this.state.top === -52 && this.state.left === 577) {
        this.setState({ art: 2, go: true });
        document.getElementById("gogit").click();
      } else if (this.state.top === -52 && this.state.left === 641) {
        this.setState({ art: 2, go: true });
        document.getElementById("golink").click();
      }
    } else {
      this.setState({ pos: this.state.pos + 1, top: this.state.top - 1 });
    }
  };

  moveDown = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.d);
      this.setState({ art: 0, go: true });
    } else {
      this.setState({ pos: this.state.pos + 1, top: this.state.top + 1 });
    }
  };

  moveLeft = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.l);
      if (this.state.top === -20 && this.state.left === 481) {
        this.up();
      } else if (this.state.left <= -11) {
        this.props.router("home", -248, 608);
      } else if (this.state.top === -52 && this.state.left === 577) {
        this.setState({ art: 4, go: true });
        document.getElementById("gogit").click();
      } else if (this.state.top === -52 && this.state.left === 641) {
        this.setState({ art: 4, go: true });
        document.getElementById("golink").click();
      } else {
        this.setState({ art: 4, go: true });
      }
    } else {
      this.setState({ pos: this.state.pos + 1, left: this.state.left - 1 });
    }
  };

  moveRight = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.r);
      if (this.state.top === 44 && this.state.left === 193) {
        this.setState({
          p: "query",
          top: -20,
          left: 481,
          pos: 0,
          go: false,
          r: setInterval(this.moveRight, 10)
        });
      } else if (this.state.top === 108 && this.state.left === 193) {
        this.setState({
          p: "BugJarBattles",
          top: -20,
          left: 481,
          go: false,
          pos: 0,
          r: setInterval(this.moveRight, 10)
        });
      } else if (this.state.top === 172 && this.state.left === 193) {
        this.setState({
          p: "utoob",
          top: -20,
          left: 481,
          go: false,
          pos: 0,
          r: setInterval(this.moveRight, 10)
        });
      } else if (this.state.top === -52 && this.state.left === 577) {
        this.setState({ art: 6, go: true });
        document.getElementById("gogit").click();
      } else if (this.state.top === -52 && this.state.left === 641) {
        this.setState({ art: 6, go: true });
        document.getElementById("golink").click();
      } else {
        this.setState({ art: 6, go: true });
      }
    } else {
      this.setState({ pos: this.state.pos + 1, left: this.state.left + 1 });
    }
  };

  proclick(eyedee) {
    clearInterval(this.state.u);
    clearInterval(this.state.r);
    clearInterval(this.state.l);
    clearInterval(this.state.d);
    this.setState({
      p: eyedee,
      top: -20,
      left: 481,
      go: false,
      pos: 0,
      r: setInterval(this.moveRight, 10)
    });
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

  up() {
    switch (this.state.p) {
      case "query":
        this.setState({
          top: 44,
          left: 193,
          p: "none",
          pos: 0,
          l: setInterval(this.moveLeft, 10)
        });
        break;
      case "swapi":
        this.setState({
          top: 108,
          left: 193,
          p: "none",
          pos: 0,
          l: setInterval(this.moveLeft, 10)
        });
        break;
      case "utoob":
        this.setState({
          top: 172,
          left: 193,
          p: "none",
          pos: 0,
          l: setInterval(this.moveLeft, 10)
        });
        break;
    }
  }

  linker() {
    switch (this.state.p) {
      case "query":
        return [
          <Query toogle={this.toogleInv} />,
          "https://github.com/kirbynator/query",
          "https://query-dpl.herokuapp.com/register/teacher"
        ];
        break;
      case "swapi":
        return [
          <BugJarBattles toogle={this.toogleInv} />,
          "https://github.com/kirbynator/BugJarBattles",
          "https://kirbynator.github.io/BugJarBattles/"
        ];
        break;
      case "utoob":
        return [
          <Utoob toogle={this.toogleInv} />,
          "https://github.com/kirbynator/hackathon_2"
        ];
        break;
      default:
        return [""];
        break;
    }
  }

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
        <div style={{ width: "1280px", height: "800px" }}>
          <div style={{ height: "100%", display: "flex", marginTop: "0px" }}>
            <div
              style={{
                height: "92%",
                width: "15%",
                backgroundImage:
                  "url('https://piskel-imgstore-b.appspot.com/img/f8cf16a3-7206-11e9-8560-a77ca29da524.gif')"
              }}
            >
              <Input
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                value="Click Here"
                autoFocus
                style={
                  this.state.focused
                    ? { opacity: "0", position: "relative", zIndex: 1 }
                    : {
                        opacity: `${this.state.invis}`,
                        position: "relative",
                        left: "50px",
                        top: "65px",
                        zIndex: 1
                      }
                }
                type="text"
                id="one"
                onKeyDown={this.handleKeyPress}
              />

              <Image
                src={this.artPick()}
                alt="Guy"
                style={{
                  opacity: `${this.state.invis}`,
                  height: "32px",
                  width: "32px",
                  zIndex: "2",
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
                  top: `-7px`,
                  left: `0px`
                }}
              />
            </div>
            <div
              style={{
                width: "25%",
                height: "104%",
                backgroundColor: "#000"
              }}
            >
              <div
                style={{
                  opacity: `${this.state.invis}`,
                  backgroundColor: "#000",
                  zIndex: 2,
                  width: "100%",
                  height: "60px",
                  paddingTop: "6px"
                }}
              >
                <Image
                  src="https://piskel-imgstore-b.appspot.com/img/fc8235ee-776d-11e9-8b25-b140ba776fc4.gif"
                  style={{
                    opacity: `${this.state.invis}`,
                    backgroundColor: "#000",
                    zIndex: 2,
                    width: "100%",
                    height: "64px",
                    opacity: 1
                  }}
                />
              </div>
              <div
                style={{
                  opacity: `${this.state.invis}`,
                  display: "flex",
                  marginLeft: "-32px",
                  marginTop: "4px"
                }}
              >
                <Image
                  src="https://piskel-imgstore-b.appspot.com/img/5692d7c2-720b-11e9-b28a-a77ca29da524.gif"
                  style={{
                    opacity: `${this.state.invis}`,
                    height: "32px",
                    width: "32px",
                    marginTop: "31px"
                  }}
                />
                <div
                  style={{
                    opacity: `${this.state.invis}`,
                    backgroundColor: "#000",
                    zIndex: 2,
                    width: "64px",
                    height: "64px"
                  }}
                />
                <h1
                  style={{
                    opacity: `${this.state.invis}`,
                    color: "#fff",
                    cursor: "pointer"
                  }}
                  onClick={() => this.proclick("query")}
                >
                  >Query
                </h1>
              </div>
              <div
                style={{
                  opacity: `${this.state.invis}`,
                  display: "flex",
                  marginLeft: "-32px",
                  marginTop: "0px"
                }}
              >
                <Image
                  src="https://piskel-imgstore-b.appspot.com/img/5692d7c2-720b-11e9-b28a-a77ca29da524.gif"
                  style={{
                    opacity: `${this.state.invis}`,
                    height: "32px",
                    width: "32px",
                    marginTop: "31px"
                  }}
                />
                <div
                  style={{
                    opacity: `${this.state.invis}`,
                    backgroundColor: "#000",
                    zIndex: 2,
                    width: "64px",
                    height: "64px"
                  }}
                />
                <h1
                  style={{
                    opacity: `${this.state.invis}`,
                    color: "#fff",
                    cursor: "pointer"
                  }}
                  onClick={() => this.proclick("swapi")}
                >
                  >BugJarBattles
                </h1>
              </div>
              <div
                style={{
                  opacity: `${this.state.invis}`,
                  display: "flex",
                  marginLeft: "-32px",
                  marginTop: "0px"
                }}
              >
                <Image
                  src="https://piskel-imgstore-b.appspot.com/img/5692d7c2-720b-11e9-b28a-a77ca29da524.gif"
                  style={{
                    opacity: `${this.state.invis}`,
                    height: "32px",
                    width: "32px",
                    marginTop: "31px"
                  }}
                />
                <div
                  style={{
                    opacity: `${this.state.invis}`,
                    backgroundColor: "#000",
                    zIndex: 2,
                    width: "64px",
                    height: "64px"
                  }}
                />
                <h1
                  style={{
                    opacity: `${this.state.invis}`,
                    color: "#fff",
                    cursor: "pointer"
                  }}
                  onClick={() => this.proclick("utoob")}
                >
                  >Utoob
                </h1>
              </div>
            </div>
            <div style={{ width: "60%", height: "104%" }}>
              <div
                style={
                  this.state.p === "none"
                    ? {
                        height: "63px",
                        width: "100%",
                        backgroundColor: "#000"
                      }
                    : {
                        height: "63px",
                        width: "100%",
                        backgroundImage:
                          'url("https://piskel-imgstore-b.appspot.com/img/a3722ee3-7210-11e9-bd8f-a77ca29da524.gif"'
                      }
                }
              >
                <Image
                  style={
                    this.state.p === "none"
                      ? { opacity: 0 }
                      : { position: "relative", top: "31px" }
                  }
                  src="https://piskel-imgstore-b.appspot.com/img/826730e6-7274-11e9-ae3e-0be3a4022c6b.gif"
                />
                <a href={this.linker()[1]} target="_blank" id="gogit">
                  <Image
                    id="github"
                    style={
                      this.state.p === "none"
                        ? { opacity: 0 }
                        : { position: "relative", left: "64px", top: "-32px" }
                    }
                    src="https://piskel-imgstore-b.appspot.com/img/73f40a80-759f-11e9-8933-1150286e7278.gif"
                  />
                </a>
                <a href={this.linker()[2]} target="_blank" id="golink">
                  <Image
                    id="link"
                    style={
                      this.linker()[2]
                        ? { position: "relative", left: "128px", top: "-64px" }
                        : { opacity: 0 }
                    }
                    src="https://piskel-imgstore-b.appspot.com/img/b6eb78e3-75ac-11e9-969b-fffdc3a66250.gif"
                  />
                </a>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "674px",
                  backgroundColor: "#000",
                  zIndex: 5
                }}
              >
                {this.linker()[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
