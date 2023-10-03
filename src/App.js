import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Airbnb from "./airbnb/Airbnb";
import MemeGenerator from "./meme/MemeGenerator";
import Homepage from "./Homepage";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/airbnb" element={<Airbnb />} />
          <Route path="/meme-generator" element={<MemeGenerator />}/>
        </Routes>
    </Router>
  );
}

export default App;
