import React from "react";
import "./style.css";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} className="card-img" />
      <div className="card-stats">
        <img src={require("./files/red-star.jpeg")} className="rating-star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount})</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <br />
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / hour
      </p>
    </div>
  );
}
