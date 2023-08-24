import React from "react";
import "./style.css"

function Nav() {
  return (
    <div>
      <nav className="nav">
        <img src="../public/files/react.png" className="nav-logo"/>
    <ul className="nav-items">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  </nav>
  </div>
  )
}

function Page() {
    return (
      <div>
        <Nav />
        <h1>This is my React Basic Site</h1>
      </div>
    );
  }

  export default Page;