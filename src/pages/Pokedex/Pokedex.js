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
          <select id="sortOrder" onChange={handleSelectChange}>
            <option value="">Sort results by...</option>
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
