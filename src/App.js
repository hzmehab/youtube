import React, { createContext, useState } from "react";
import "./App.css";
import All from "./Components/All";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import { Container } from "@mui/material";
import Trend from "./Components/Trend";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const apiKey = "AIzaSyAg4ghOgmXwoP-xCgYlG1xvh-Jx86_iozk";

export const itemsContext = createContext([]);

export default function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('all')

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
    <itemsContext.Provider value={{items, setItems, currentPage, setCurrentPage}}>
      <div className="App">
        <Container>
          <Search getResult={getResult} />
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/trend" element={<Trend />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </itemsContext.Provider>
  );
}
