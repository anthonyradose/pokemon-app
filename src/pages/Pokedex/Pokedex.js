import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import PokemonCard from "./PokemonCard";
import "./Pokedex.css";
import Pokeball from "../../components/Pokeball/Pokeball";
import Search from "./Search/Search";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import { getPokemonStuff } from "../../utils";

const P = new Pokedex();

const getPokemonDetails = async (pokemon) => {
  const item = await P.getPokemonByName(pokemon.name);
  return item;
};

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(12);
  const [selectedSortOption, setSelectedSortOption] = useState("numberAsc"); // Set the default selected sorting option


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
        pokemonList.results?.map((pokemon) => getPokemonStuff(pokemon))
      );
      setTimeout(() => {
      setPokemon(pokemonListWithDetails);
      setLoading(false);
    }, 1000); // Delay of 1 second
    }
  };
  console.log("hello!");
  const getAllPokemon = async () => {
    setLoading(true);
    const pokemonList = await P.getPokemonsList({
      limit: totalPokemon,
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

  const loadMore = async () => {
    const pokemonList = await P.getPokemonsList({
      limit: start + 12,
      offset: 0,
    });

    if (pokemonList?.results) {
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(getPokemonDetails)
      );

      setPokemon(pokemonListWithDetails);
      setStart(start + 12);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (loading) {
    return <Pokeball />;
  }

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSortOption(selectedOption);
  
    setLoading(true);
    let sortedPokemon = [];
  
    if (selectedOption === "numberAsc") {
      sortedPokemon = pokemon.slice().sort((a, b) => a.id - b.id);
    } else if (selectedOption === "numberDesc") {
      sortedPokemon = pokemon.slice().sort((a, b) => b.id - a.id);
    } else if (selectedOption === "nameAsc") {
      sortedPokemon = pokemon.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === "nameDesc") {
      sortedPokemon = pokemon.slice().sort((a, b) => b.name.localeCompare(a.name));
    }
  
    setLoading(false);
    setPokemon(sortedPokemon);
  };
  

  return (
    <div className="pokedexContainer">
      <div className="titleContainer">
        <h1 className="titleH1">Pokédex</h1>
      </div>
      <Search pokemonItem={pokemon} />
      <div className="filtersContainer">
        <button
          className="randomizer"
          type="button"
          alt="Surprise me!"
          onClick={getRandomPokemon}
        >
          {" "}
          <LoopRoundedIcon></LoopRoundedIcon>
          Surprise Me!
        </button>
        <div className="selectWrapper">
          <select id="sortOrder" onChange={handleSelectChange} value={selectedSortOption}>
            <option value="numberAsc">Lowest Number (First)</option>
            <option value="numberDesc">Highest Number (First)</option>
            <option value="nameAsc">A-Z</option>
            <option value="nameDesc">Z-A</option>
          </select>
        </div>
      </div>
      <div className="pokedexResultsContainer">
        {pokemon?.map((poke) => (
          <PokemonCard pokemonItem={poke} key={poke.name} />
        ))}
      </div>
      <div className="load-more-button-container">
        <button
          className="load-more-button"
          onClick={loadMore}
        >
          Load More Pokémon
        </button>
        <button
          className="load-all-button"
          onClick={() => {
            getAllPokemon();
          }}
        >
          Load All Pokémon
        </button>
      </div>
    </div>
  );
};

export default Home;
