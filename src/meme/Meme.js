import React from "react"
import memesData from "./memesData"

export default function Meme() {
    
    function handleClick() {
        const randomMeme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)]
        console.log(randomMeme.url)
    }

    return(
        <main>
        <div className="form">
            <input type="text" placeholder="name" className="form-field"/>
                <input type="text" placeholder="secondName" className="form-field"/>
            <button className="form-button" onClick={handleClick}>Get a new meme image</button>
        </div>
        </main>
    )
}