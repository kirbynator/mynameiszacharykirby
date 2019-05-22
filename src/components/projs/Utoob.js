import React from "react";
import { Image, Button, Menu, Dropdown } from "semantic-ui-react";
import ReactModal from "react-modal";

class Utoob extends React.Component {
  state = { open: false, picnum: 0, toogle: false, toggle: false };

  pic() {
    switch (this.state.picnum) {
      case 1:
        return "https://imgur.com/TSKwF6m.jpeg";
        break;
      case 2:
        return "https://imgur.com/SiCRvF2.jpeg";
        break;
    }
  }

  chagepic(x) {
    if (x === "<") {
      if (this.state.picnum === 1) {
        this.setState({ picnum: 2 });
      } else {
        this.setState({ picnum: this.state.picnum - 1 });
      }
    } else {
      if (this.state.picnum === 2) {
        this.setState({ picnum: 1 });
      } else {
        this.setState({ picnum: this.state.picnum + 1 });
      }
    }
  }

  close = () => {
    this.setState({ open: false });
    this.props.toogle("banananananas");
  };

  modul() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.open}
          style={{ zIndex: 5 }}
          onAfterOpen={() => this.props.toogle("y")}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <div>
              <Button.Group>
                <Button onClick={() => this.chagepic("<")}>Prev</Button>
                <Button.Or />
                <Button onClick={() => this.chagepic(">")}>Next</Button>
              </Button.Group>
            </div>
            <div>{this.state.picnum}</div>
            <div>
              <h1 onClick={this.close} style={{ cursor: "pointer" }}>
                X
              </h1>
            </div>
          </div>
          <Image src={this.pic()} style={{ zIndex: 5 }} />
        </ReactModal>
      </div>
    );
  }

  render() {
    return (
      <div style={{ height: "100%", backgroundColor: "red" }}>
        <div style={{ backgroundColor: "white" }}>
          <Menu secondary>
            <Image
              src="https://imgur.com/ID0zLWh.png"
              size="small"
              style={{
                marginLeft: "10%"
              }}
            />
            <Menu.Menu position="right">
              <Dropdown
                icon={
                  <img
                    alt="logo"
                    width="32"
                    height="32"
                    style={
                      this.state.toogle
                        ? {
                            marginRight: "61px",
                            marginTop: "10px",
                            borderRadius: "50px"
                          }
                        : {
                            marginRight: "25px",
                            marginTop: "10px",
                            borderRadius: "50px"
                          }
                    }
                    src="https://imgur.com/HTsTTzg.png"
                  />
                }
              >
                <Dropdown.Menu style={{ marginRight: "10px" }}>
                  <Dropdown.Item onClick={() => alert("bye")} text="Logout" />
                </Dropdown.Menu>
              </Dropdown>
              <div style={{ marginRight: "10px", marginTop: "10px" }}>
                <Button
                  color="red"
                  size="tiny"
                  onClick={() => this.setState({ toogle: !this.state.toogle })}
                >
                  {this.state.toogle ? "Cancel" : "Upload Video"}
                </Button>
              </div>
            </Menu.Menu>
          </Menu>
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            zIndex: 5,
            paddingTop: 25
          }}
        >
          <h1 style={{ color: "#fff" }}>Utoob</h1>
          <h3 style={{ color: "#fff", margin: "3%" }}>
            Utoob is a YouTube knock off. I made Utoob with a team of three
            other developers for the DevPoint 2019 Spring Hackthon. Provided was
            a wire frame to follow and objectives to hit. After of eight hours
            of straight programming, my team ended up bringing home the trophy!
          </h3>
          <div
            id="gridHolder"
            style={
              window.innerWidth > 500
                ? {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    paddingBottom: 15
                  }
                : {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingBottom: 15
                  }
            }
          >
            <Image
              src="https://imgur.com/TSKwF6m.jpeg"
              style={{
                marginTop: "5%",
                cursor: "pointer",
                width: "250px",
                height: "150px",
                borderRadius: "14px",
                borderStyle: "ridge"
              }}
              onClick={() => this.setState({ open: true, picnum: 1 })}
            />
            <Image
              src="https://imgur.com/SiCRvF2.jpeg"
              style={{
                marginTop: "5%",
                cursor: "pointer",
                width: "250px",
                height: "150px",
                borderRadius: "14px",
                borderStyle: "ridge"
              }}
              onClick={() => this.setState({ open: true, picnum: 2 })}
            />
          </div>
          {this.modul()}
        </div>
      </div>
    );
  }
}
export default Utoob;
