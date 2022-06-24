import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import Container from "@mui/material/Container";

const apiKey = "AIzaSyAg4ghOgmXwoP-xCgYlG1xvh-Jx86_iozk";

export default function App() {
  const [items, setItems] = useState([]);

  const getResult = async (e) => {
    e.preventDefault();
    let search = e.target.elements.search.value;
    let api = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&q=${search}&maxResults=10`
    );
    let data = await api.json();
    setItems(data.items);
  };

  return (
    <div className="App">
      <Container>
        <Navbar />
        <Search getResult={getResult} />
        <Display items={items} />
      </Container>
    </div>
  );
}
