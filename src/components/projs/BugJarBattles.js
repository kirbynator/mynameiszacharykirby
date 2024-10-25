import React from "react";
import { Image, Button } from "semantic-ui-react";
import ReactModal from "react-modal";
import bugBattle from "./bugBattle.png"

class BugJarBattles extends React.Component {
  state = { open: false, picnum: 0 };

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
            <div style={{display:'flex', justifyContent:'flex-end', width:'100%'}}>
              <h1 onClick={this.close} style={{ cursor: "pointer" }}>
                X
              </h1>
            </div>
          </div>
          <Image src={bugBattle} style={{ zIndex: 5 }} />
        </ReactModal>
      </div>
    );
  }

  render() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        color: "#000",
        textAlign: "center"
      }}
    >
      <h1>BugJarBattles</h1>
      {this.modul()}
      <div style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%"
            }}>
        <h3 style={{ margin: "3%" }}>
          I wanted to try my hand at learning firebase. I decided to create a web game were your bugs fight a friend's bugs. 
          This project helped me get a good grasp of the firebase backend and css aminations! Grab a friend and try it out! 
          See if you can tell what videogame heavily inspired it.
        </h3>
        <Image
              src={bugBattle} 
              style={{
                marginTop: "0%",
                cursor: "pointer",
                width: "250px",
                height: "150px",
                borderRadius: "14px",
                borderStyle: "ridge"
              }}
              onClick={() => this.setState({ open: true })}
            />
      </div>
        <iframe 
          style={{height: '69%', width: '100%'}}
          src="https://kirbynator.github.io/BugJarBattles/" title="BugJarBattles" 
        />
    </div>
  )
};
};
export default BugJarBattles;
