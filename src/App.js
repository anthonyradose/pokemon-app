import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import PokemonCard from "./PokemonCard";
import "./App.css";

const P = new Pokedex();

const getPokemonDetails = async (pokemon) => {
  const item = await P.getPokemonByName(pokemon.name);
  return item;
};

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalPokemon = 898;

  const getRandomPokemon = async () => {
    setLoading(true);

    const pokemonList = await P.getPokemonsList({
      limit: totalPokemon,
      offset: 0,
    });

    const randomPokemonArray = [];
    for (let i = 1; i < 13; i += 1) {
      randomPokemonArray.push(
        pokemonList.results[Math.floor(Math.random() * totalPokemon)]
      );
    }

    const pokemonListWithDetails = await Promise.all(
      randomPokemonArray.map(getPokemonDetails)
    );

    setPokemon(pokemonListWithDetails);
    setLoading(false);
  };

  const getPokemon = async () => {
    setLoading(true);
    const pokemonList = await P.getPokemonsList({
      limit: 12,
      offset: 0,
    });
    if (pokemonList?.results) {
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(getPokemonDetails)
      );

      setPokemon(pokemonListWithDetails);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (loading) {
    return <div className="pokeball" />;
  }

  const handleSelectChange = async (event) => {
    let sortedPokemon = [];
    if (event.target.value === "numberAsc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    }
    if (event.target.value === "numberDesc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
    }
    if (event.target.value === "nameAsc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (event.target.value === "nameDesc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    setLoading(false);
    setPokemon(sortedPokemon);
  };


  return (
    <div className="App">
      <h1>Pokédex</h1>
      <button
        className="randomizer"
        type="button"
        alt="Surprise me!"
        onClick={getRandomPokemon}
      >
        Surprise Me!
      </button>
      <div
        className="custom-select-wrapper"
        // style={visibility: visible}
      >
        <select id="sortOrder" onChange={handleSelectChange}>
          <option value="noSort">Sort results by...</option>
          <option value="numberAsc">Lowest Number (First)</option>
          <option value="numberDesc">Highest Number (First)</option>
          <option value="nameAsc">A-Z</option>
          <option value="nameDesc">Z-A</option>
        </select>
        <div className="custom-select-menu" tabindex="0">
          <label className="styled-select button-black">{/* ::before */}</label>
        </div>
      </div>
      {/* <button type="button" onClick={() => getPokemon()}>
        Show all!
      </button> */}
      <div className="container">
        {pokemon?.map((cunt) => (
          <PokemonCard
            pokemonItem={cunt}
            key={cunt.name}
            yah="alwite"
            kimchi="HMMMMMMM"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
