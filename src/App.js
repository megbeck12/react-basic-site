import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Card from "./Card";
import data from "./data"

function App() {
  const newData = data.map((item) => {
    return (
      <Card
      key={item.id}
      {...item}
    />
    )
  });
  
  return (
    <div>
      <Navbar />
      <Main />
      <section className="cards-list">{newData}</section>
    </div>
  );
}

export default App;
