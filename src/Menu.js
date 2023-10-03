import React, { useState } from "react";
import "./style.css";

export default function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="menu-button">
        {menuVisible ? "Close": "Open"}
      </button>
      {menuVisible && (
        <div className="menu">
          <ul>
            <li className="menu-items">
              <a href="/">Home</a>
            </li>
            <li className="menu-items">
              <a href="/airbnb">Airbnb</a>
            </li>
            <li className="menu-items">
              <a href="/meme-generator">Meme Generator</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
