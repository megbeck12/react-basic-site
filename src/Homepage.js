import React from "react";
import Menu from "./Menu";

export default function Homepage() {
  return (
    <div>
        <Menu />
      <div className="nav-container">
        <div className="first-section">
          <h2>Click the menu link to view different React projects</h2>
        </div>
        <div className="second-section">
          <p>This is another container</p>
        </div>
      </div>
    </div>
  );
}
