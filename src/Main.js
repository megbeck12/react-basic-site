import React from "react";
import "./style.css";

export default function Main() {
  return (
    <div>
      <img src={require("./files/braids.jpeg")} className="main-img" />
      <img src={require("./files/horse.jpeg")} className="main-img" />
      <img src={require("./files/sass.jpeg")} className="main-img" />
      <img src={require("./files/sk8er-boi.jpeg")} className="main-img" />
      <section className="main">
        <div>
          <h1 className="main-header">Online Experiences</h1>
          <p className="main-text">
            Join unique interactive activities led by one-of-a-kind hosts--all
            without leaving home.
          </p>
        </div>
      </section>
    </div>
  );
}
