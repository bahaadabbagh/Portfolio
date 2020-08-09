import React from "react";
import masthead from "../images/test4.svg";

export default function portfolio(props) {
  return (
    <div className="home">
      <div className="homeAllText">
        <h1 className="homeMainText">
          {" "}
          I'm Bahaa, I'm a <span className="changingContent"></span>
          <br />{" "}
        </h1>
        <h3>
          I'm a seasoned salesman and a digital marketing expert with a passion
          for programming.
          <br />
          <br />
          I'm always working on developing myself and learning something new.{" "}
          <br />
          {/* I am also very happy when I give training on technichal or soft skills */}
        </h3>
      </div>
      <div>
        <img src={masthead} alt="masthead" className="masthead"></img>
      </div>
      {/* <div className="homeAllText">
        <ul>
          {" "}
          <h3>Digital Marketing</h3>
          <li>5 years of digital marketing management </li>
          <li>Trained by Google product trainers</li>
          <li>Worked on more than 400 accounts</li>
          <li>More than 500K USD quarterly</li>
        </ul>
      </div> */}
    </div>
  );
}
