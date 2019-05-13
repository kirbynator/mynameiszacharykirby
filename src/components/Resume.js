import React from "react";
import Rpdf from "../ResumeZacharyKirby.pdf";
import { Input, Image } from "semantic-ui-react";
import Navbar from "./Navbar.js";

class Resume extends React.Component {
  state = { go: true, top: 44, left: -31, art: 0, focused: true };

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

  handleKeyPress = event => {
    switch (event.key) {
      case "ArrowLeft":
        if (
          (this.state.go === true && this.state.left > 1) ||
          (this.state.go === true &&
            this.state.top <= 44 &&
            this.state.top >= 12)
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
        if (this.state.go === true) {
          this.setState({
            go: false,
            pos: 0,
            art: 7,
            r: setInterval(this.moveRight, 10)
          });
        }
        break;
      case "ArrowUp":
        if (this.state.go === true) {
          this.setState({
            go: false,
            pos: 0,
            art: 3,
            u: setInterval(this.moveUp, 10)
          });
        }
        break;
      case "ArrowDown":
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
      if (this.state.top === -20 && this.state.left === 65) {
        this.printDiv();
      } else if (this.state.top === -20 && this.state.left === 129) {
        this.dlDiv();
      }
    } else {
      this.setState({ pos: this.state.pos + 1, top: this.state.top - 1 });
    }
  };

  moveDown = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.d);
      this.setState({ art: 0, go: true });
      if (this.state.top === -20 && this.state.left === 65) {
        this.printDiv();
      } else if (this.state.top === -20 && this.state.left === 129) {
        this.dlDiv();
      }
    } else {
      this.setState({ pos: this.state.pos + 1, top: this.state.top + 1 });
    }
  };

  moveLeft = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.l);
      this.setState({ art: 4, go: true });
      if (this.state.top === -20 && this.state.left === 65) {
        this.printDiv();
      } else if (this.state.top === -20 && this.state.left === 129) {
        this.dlDiv();
      } else if (
        this.state.top <= 44 &&
        this.state.top >= 12 &&
        this.state.left === -31
      ) {
        this.props.router("home", -248, 448);
      }
    } else {
      this.setState({ pos: this.state.pos + 1, left: this.state.left - 1 });
    }
  };

  moveRight = () => {
    if (this.state.pos === 32) {
      clearInterval(this.state.r);
      this.setState({ art: 6, go: true });
      if (this.state.top === -20 && this.state.left === 65) {
        this.printDiv();
      } else if (this.state.top === -20 && this.state.left === 129) {
        this.dlDiv();
      }
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

  printDiv() {
    document.getElementById("printf").contentWindow.print();
  }

  dlDiv() {
    document.getElementById("dl").click();
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
          height: window.innerHeight,
          position: "absolute",
          top: 40,
          left: 0,
          width: "100%",
          backgroundImage:
            "url('https://piskel-imgstore-b.appspot.com/img/9aa45a78-7038-11e9-a318-c559c5b0181b.gif')"
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
              : { position: "relative", left: "50px", top: "65px", zIndex: 1 }
          }
          type="text"
          id="one"
          onKeyDown={this.handleKeyPress}
        />

        <Image
          src={this.artPick()}
          alt="Guy"
          style={{
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
            top: `-6px`,
            left: `0px`
          }}
        />
        <Image
          id="print"
          style={{
            cursor: "pointer",
            width: "32px",
            height: "32px",
            position: "relative",
            top: "-108px",
            left: "65px",
            zIndex: 1
          }}
          onClick={() => this.printDiv("pdf")}
          src="https://piskel-imgstore-b.appspot.com/img/322214d4-70fb-11e9-b6dc-09cdafe7acc1.gif"
        />
        <a
          style={{
            position: "relative",
            top: "-140px",
            left: "130px"
          }}
          id="dl"
          href={Rpdf}
          type="application/pdf"
          download="ZacharyKirbyResume"
        >
          <Image
            id="download"
            style={{
              width: "32px",
              height: "32px",
              zIndex: 1
            }}
            src="https://piskel-imgstore-b.appspot.com/img/7ed3ad14-71e4-11e9-b93b-b99fbee9d1b6.gif"
          />
        </a>
        <div
          id="object"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "95%",
            marginBottom: 0
          }}
        >
          <object
            style={{
              width: "800px",
              height: "95%",
              marginTop: "1%"
            }}
            data={Rpdf}
            type="application/pdf"
          >
            <embed src={Rpdf} type="application/pdf" />
          </object>
        </div>
        <iframe
          title="myResume"
          id="printf"
          ref="pdf"
          style={{ position: "relative", left: `-500px`, top: "-300px" }}
          src={Rpdf}
        />
      </div>
    );
  }
}
export default Resume;
