import React from "react";
import Pokedex from "./pages/Pokedex/Pokedex";
import Pokemon from "./pages/Pokemon/Pokemon";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <div className="appContentContainer">
      <Router basename="/pokemon-app/">
      <header>
        <Nav />
        </header>
        <main>
        <div className="appRoutesContainer">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/:name" element={<Pokemon />} />
          </Routes>
        </div>
        </main>
        {/* <footer></footer> */}
      </Router>
    </div>
  );
};

export default App;
