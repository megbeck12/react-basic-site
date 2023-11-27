import React from "react"
import "./style.css"
import Header from "./Header"
import Meme from "./Meme"
import Menu from "../Menu"

export default function MemeGenerator() {
    return (
        <div>
            <Menu />
            <Header />
            <Meme />
        </div>
    )
}