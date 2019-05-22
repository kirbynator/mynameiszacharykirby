import React from "react";
import { Menu } from "semantic-ui-react";

const Navbar = props => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Menu inverted borderless style={{ background: "black" }}>
        <Menu.Item
          name="Home"
          active={props.activeItem === "home"}
          onClick={() => props.router("home", -248, 512)}
        />
        <Menu.Item
          name="Resume"
          active={props.activeItem === "resume"}
          onClick={() => props.router("resume")}
        />
        <Menu.Item
          name="Projects"
          active={props.activeItem === "projects"}
          onClick={() => props.router("projects")}
        />
        <Menu.Item
          name="About Me"
          active={props.activeItem === "about"}
          onClick={() => props.router("about")}
        />
      </Menu>
      <img
        style={{ width: "10%", height: "10%" }}
        src={require("./Asset_1.svg")}
        alt="Logo"
      />
    </div>
  );
};
export default Navbar;
