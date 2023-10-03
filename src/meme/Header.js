import React from "react";
import "./style.css"

export default function Header() {
    return (
        <div>
           <header className="header">
            <img src={require("./files/awkwardSeal.jpeg")} className="header-image"/>
            <h2 className="header-title">Header Component</h2>
            <h4 className="header-project">Meme Generator</h4>
           </header>
        </div>
    )
}