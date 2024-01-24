import React, { useEffect, useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMemeImage(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-field"
          name="topText"
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-field"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} className="meme-image" />
        <h2 className="meme-text top">{memeImage.topText}</h2>
        <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
}
