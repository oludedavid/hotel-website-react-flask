import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Room from "./components/rooms/Room";
import Book from "./components/booking/Book";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="room" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
