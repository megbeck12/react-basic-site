import React from "react";
import "./style.css";

export default function Card() {
  return (
    <div className="card">
        <img src={require("./files/sk8er-boi.jpeg")} className="card-img" />
        <div className="card-stats">
          <img src={require("./files/red-star.jpeg")} className="rating-star" />
          <span>5.0</span>
          <span className="gray">(6)</span>
          <span className="gray">USA</span>
        </div>
        <p>Life Lessons with Someone</p>
        <br />
        <p><span className="bold">From $39</span> / hour</p>
    </div>
  );
}
