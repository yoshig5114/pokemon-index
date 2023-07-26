import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { HomePage, PokePage, SinglePokePage } from "./pages/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/poke">Pokemon Info</NavLink></li>
        </ul>        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poke" element={<PokePage />} />
          <Route path="/pokes/poke/:id" element={<SinglePokePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}