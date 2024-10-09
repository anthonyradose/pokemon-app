import React from "react";
import Pokedex from "./pages/Pokedex/Pokedex";
import Pokemon from "./pages/Pokemon/Pokemon";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="appContentContainer">
      <Router basename="/pokemon-app/">
        <Nav />
        <div className="appRoutesContainer">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/:name" element={<Pokemon />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
