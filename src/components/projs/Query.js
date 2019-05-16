import React from "react";
import { Image, Grid, Button } from "semantic-ui-react";
import ReactModal from "react-modal";

class Query extends React.Component {
  state = { open: false, picnum: 0 };

  pic() {
    switch (this.state.picnum) {
      case 1:
        return "https://imgur.com/aKWj0UI.jpeg";
        break;
      case 2:
        return "https://imgur.com/VuxpuzJ.jpeg";
        break;
      case 3:
        return "https://imgur.com/ZrKN8Bg.jpeg";
        break;
      case 4:
        return "https://imgur.com/6kD514c.jpeg";
        break;
    }
  }

  chagepic(x) {
    if (x === "<") {
      if (this.state.picnum === 1) {
        this.setState({ picnum: 4 });
      } else {
        this.setState({ picnum: this.state.picnum - 1 });
      }
    } else {
      if (this.state.picnum === 4) {
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
      <div
        style={{
          backgroundColor: "#5906A3",
          height: "100%",
          width: "100%",
          textAlign: "center",
          zIndex: 5
        }}
      >
        <h1 style={{ color: "#fff" }}>Query</h1>
        <h3 style={{ color: "#fff", margin: "3%" }}>
          Query is an app for quick, on the fly, quizzes for use both in the
          classroom, and for mass survey data gathering. I collaborated with a
          team of other programers to create, test and refine the Query app. In
          doing so, we practiced agile software development, where I was the
          scrum leader. Query app is currently being used by DevPoint Labs.
        </h3>
        <div
          style={{
            marginLeft: "7%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Grid centered>
            <Grid.Row centered columns={2}>
              <Grid.Column>
                <Image
                  src="https://imgur.com/aKWj0UI.jpeg"
                  style={{
                    cursor: "pointer",
                    width: "250px",
                    height: "150px",
                    borderRadius: "14px",
                    borderStyle: "ridge"
                  }}
                  onClick={() => this.setState({ open: true, picnum: 1 })}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src="https://imgur.com/VuxpuzJ.jpeg"
                  style={{
                    cursor: "pointer",
                    width: "250px",
                    height: "150px",
                    borderRadius: "14px",
                    borderStyle: "ridge"
                  }}
                  onClick={() => this.setState({ open: true, picnum: 2 })}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src="https://imgur.com/ZrKN8Bg.jpeg"
                  style={{
                    marginTop: "5%",
                    cursor: "pointer",
                    width: "250px",
                    height: "150px",
                    borderRadius: "14px",
                    borderStyle: "ridge"
                  }}
                  onClick={() => this.setState({ open: true, picnum: 3 })}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src="https://imgur.com/6kD514c.jpeg"
                  style={{
                    marginTop: "5%",
                    cursor: "pointer",
                    width: "250px",
                    height: "150px",
                    borderRadius: "14px",
                    borderStyle: "ridge"
                  }}
                  onClick={() => this.setState({ open: true, picnum: 4 })}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        {this.modul()}
      </div>
    );
  }
}
export default Query;
