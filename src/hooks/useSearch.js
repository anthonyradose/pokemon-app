import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import P from "../services/pokedexClient";

const useSearch = () => {
  const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState("");
  const [foundPokemon, setFoundPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await P.getPokemonsList({
        limit: 898,
        offset: 0,
      });
      const pokemonData = pokemonList.results.map((pokemon) => pokemon.name);
      setPokemon(pokemonData);
    };
    getPokemon();
  }, []);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = pokemon.filter((poke) =>
        poke.toLowerCase().includes(keyword.toLowerCase())
      );
      setFoundPokemon(results);
    } else {
      setFoundPokemon([]);
    }
    setName(keyword);
  };

  const handlePokemonSelect = (poke) => {
    setName(poke.charAt(0).toUpperCase() + poke.slice(1));
    setFoundPokemon("");
  };

  const handleSearch = () => {
    navigate(`/${name.toLowerCase()}`);
  };

  const clearResults = () => {
    setFoundPokemon("");
  };

  return {
    name,
    foundPokemon,
    filter,
    handlePokemonSelect,
    handleSearch,
    clearResults,
  };
};

export default useSearch; 