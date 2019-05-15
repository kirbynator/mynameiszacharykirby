import React from "react";
import { Input, Image } from "semantic-ui-react";

class Home extends React.Component {
  state = { go: true, top: 0, left: 0, art: 0 };

  componentDidMount() {
    this.setState({ top: this.props.top, left: this.props.left });
  }

  handleKeyPress = event => {
    console.log(event.key);
    switch (event.key) {
      case "ArrowLeft" || "a":
        if (this.state.go === true) {
          this.setState({
            go: false,
            pos: 0,
            art: 5,
            l: setInterval(this.moveLeft, 10)
          });
        }
        break;
      case "ArrowRight" || "d":
        if (this.state.go === true) {
          this.setState({
            go: false,
            pos: 0,
            art: 7,
            r: setInterval(this.moveRight, 10)
          });
        }
        break;
      case "ArrowUp" || "w":
        if (this.state.top === -248 && this.state.left === 736) {
          this.setState({ art: 2 });
          this.props.router("projects");
        } else if (this.state.top === -56 && this.state.left === 736) {
          this.setState({ art: 2 });
          this.props.router("about");
        } else if (this.state.top === -248 && this.state.left === 448) {
          this.setState({ art: 2 });
          this.props.router("resume");
        } else if (this.state.go === true) {
          this.setState({
            go: false,
            pos: 0,
            art: 3,
            u: setInterval(this.moveUp, 10)
          });
        }
        break;
      case "ArrowDown" || "s":
        if (this.state.go === true) {
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
      this.setState({ art: 4, go: true });
    } else {
      this.setState({ pos: this.state.pos + 1, left: this.state.left - 1 });
    }
  };

  moveRight = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.r);
      this.setState({ art: 6, go: true });
    } else {
      this.setState({ pos: this.state.pos + 1, left: this.state.left + 1 });
    }
  };

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
        <div style={{ width: "1280px", height: "800px" }}>
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
          <Image
            id="about"
            onClick={() => this.props.router("about")}
            style={
              this.state.top < -56
                ? {
                    position: "relative",
                    left: "704px",
                    top: "230px",
                    zIndex: "2",
                    cursor: "pointer"
                  }
                : {
                    position: "relative",
                    left: "704px",
                    top: "230px",
                    zIndex: "0",
                    cursor: "pointer"
                  }
            }
            src="https://piskel-imgstore-b.appspot.com/img/ac2de09c-6e13-11e9-8eb3-6599fce8ec5e.gif"
          />
          <Image
            id="projects"
            onClick={() => this.props.router("projects")}
            style={
              this.state.top < -250
                ? {
                    position: "relative",
                    left: "704px",
                    top: "-90px",
                    zIndex: "2",
                    cursor: "pointer"
                  }
                : {
                    position: "relative",
                    left: "704px",
                    top: "-90px",
                    zIndex: "0",
                    cursor: "pointer"
                  }
            }
            src="https://piskel-imgstore-b.appspot.com/img/7a302107-6f72-11e9-a9c3-b93eabd0d533.gif"
          />
          <Image
            id="resume"
            onClick={() => this.props.router("resume")}
            style={
              this.state.top < -250
                ? {
                    position: "relative",
                    left: "416px",
                    top: "-218px",
                    zIndex: "2",
                    cursor: "pointer"
                  }
                : {
                    position: "relative",
                    left: "416px",
                    top: "-218px",
                    zIndex: "0",
                    cursor: "pointer"
                  }
            }
            src="https://piskel-imgstore-b.appspot.com/img/70fabaa8-7047-11e9-8cdf-1993f2e49c9b.gif"
          />
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
        </div>
      </div>
    );
  }
}
export default Home;
// https://piskel-imgstore-b.appspot.com/img/70fabaa8-7047-11e9-8cdf-1993f2e49c9b.gif
