import React from "react";
import Navbar from "./Navbar.js";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import About from "./About";
import Mobile from "./Mobile";

class Landing extends React.Component {
  state = { page: "home", top: -216, left: 544 };

  componentDidMount() {
    if (this.props.location.pathname === "/resume") {
      this.router("resume");
    } else if (this.props.location.pathname === "/projects") {
      this.router("projects");
    } else if (this.props.location.pathname === "/about") {
      this.router("about");
    }
  }

  router = (x, t, l) => {
    this.setState({ page: x, top: t, left: l });
  };

  render() {
    document.body.style = "background: #000";
    if (window.innerWidth >= 1280) {
      switch (this.state.page) {
        case "home":
          return (
            <div>
              <Navbar activeItem={this.state.page} router={this.router} />
              <Home
                router={this.router}
                top={this.state.top}
                left={this.state.left}
              />
            </div>
          );
          break;
        case "resume":
          return (
            <div>
              <Navbar activeItem={this.state.page} router={this.router} />
              <Resume router={this.router} />
            </div>
          );
          break;
        case "projects":
          return (
            <div
              style={{
                height: `${window.innerHeight}px`
              }}
            >
              <Navbar activeItem={this.state.page} router={this.router} />
              <Projects router={this.router} />
            </div>
          );
          break;
        case "about":
          return (
            <div
              style={{
                height: `${window.innerHeight}px`
              }}
            >
              <Navbar activeItem={this.state.page} router={this.router} />
              <About router={this.router} />
            </div>
          );
          break;
      }
    } else {
      return <Mobile />;
    }
  }
}
export default Landing;
