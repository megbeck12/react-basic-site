import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Airbnb from "./airbnb/Airbnb";

function App() {
  return (
    <Router>
      <div>
        <h2>Click the corresponding link to view different projects</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <a href="/airbnb">Airbnb</a>
          </li>
        </ul>
        <Routes>
          <Route path="/airbnb" element={<Airbnb />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
