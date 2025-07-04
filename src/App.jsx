import React from "react";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import Nav from "./components/common/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <header role="banner">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:name" element={<PokemonDetails />} />
      </Routes>
      <footer role="contentinfo">
        <p>&copy; 2025 Pokédex App - Pokémon data provided by PokéAPI</p>
      </footer>
    </Router>
  );
};

export default App;
