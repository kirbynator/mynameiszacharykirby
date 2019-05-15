import React from "react";
import { Image } from "semantic-ui-react";

const Query = props => {
  return (
    <div
      style={{
        backgroundColor: "#5906A3",
        height: "100%",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "#fff" }}>Query</h1>
      <h3 style={{ color: "#fff", margin: "3%" }}>
        Query is an app for quick, on the fly, quizzes for use both in the
        classroom, and for mass survey data gathering. I collaborated with a
        team of other programers to create, test and refine the Query app. In
        doing so, we practiced agile software development, where I was the scrum
        leader. Query app is currently being used by DevPoint Labs.
      </h3>
      <Image
        src="https://imgur.com/aKWj0UI.jpeg"
        style={{
          width: "250px",
          height: "150px",
          borderRadius: "14px",
          borderStyle: "ridge"
        }}
      />
      <Image src="https://imgur.com/VuxpuzJ.jpeg" />
      <Image src="https://imgur.com/ZrKN8Bg.jpeg" />
      <Image src="https://imgur.com/6kD514c.jpeg" />
    </div>
  );
};
export default Query;
