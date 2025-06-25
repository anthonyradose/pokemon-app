import React from "react";
import PokemonList from "./pages/PokemonList/PokemonList";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";
import Nav from "./components/common/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <div className="appContentContainer">
      <Router basename="/pokemon-app">
        <header role="banner">
          <Nav />
        </header>
        <main role="main">
          <div className="appRoutesContainer">
            <Routes>
              <Route path="/" element={<PokemonList />} />
              <Route path="/:name" element={<PokemonDetails />} />
            </Routes>
          </div>
        </main>
        <footer role="contentinfo">
          <p>&copy; 2025 Pokédex App - Pokémon data provided by PokéAPI</p>
        </footer>
      </Router>
    </div>
  );
};

export default App;
