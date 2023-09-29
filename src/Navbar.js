import React from "react";
import "./style.css";

export default function Navbar() {
    return (
      <div>
        <nav className="nav">
          <img src={require("./files/airbnb.png")} className="nav-logo" />
        </nav>
      </div>
    );
  }