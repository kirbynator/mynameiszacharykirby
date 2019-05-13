import React from "react";
import Navbar from "./Navbar.js";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import About from "./About";

class Landing extends React.Component {
  state = { page: "home", top: -248, left: 544 };

  componentDidMount() {
    if (this.props.location.pathname === "/resume") {
      this.router("resume");
    } else if (this.props.location.pathname === "/projects") {
      this.router("projects");
    }
  }

  router = (x, t, l) => {
    this.setState({ page: x, top: t, left: l });
  };

  render() {
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
              height: `${window.innerHeight}px`,
              backgroundImage:
                "url('https://piskel-imgstore-b.appspot.com/img/f8cf16a3-7206-11e9-8560-a77ca29da524.gif')"
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
              height: `${window.innerHeight}px`,
              backgroundImage:
                "url('https://piskel-imgstore-b.appspot.com/img/169b829e-75c2-11e9-b2f3-fffdc3a66250.gif')"
            }}
          >
            <Navbar activeItem={this.state.page} router={this.router} />
            <About router={this.router} />
          </div>
        );
        break;
    }
  }
}
export default Landing;
