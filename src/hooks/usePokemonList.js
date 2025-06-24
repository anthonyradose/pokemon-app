import { useState, useEffect } from "react";
import { getPokemon, getAllPokemon, loadMore, getRandomPokemon } from "../services/pokemonListApi";

const usePokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(12);
  const [selectedSortOption, setSelectedSortOption] = useState("numberAsc");
  const totalPokemon = 898;

  const handleGetRandomPokemon = async () => {
    setLoading(true);
    const pokemonListWithDetails = await getRandomPokemon(totalPokemon);
    setPokemon(pokemonListWithDetails);
    setLoading(false);
  };

  const handleGetPokemon = async () => {
    setLoading(true);
    const pokemonListWithDetails = await getPokemon();
    setTimeout(() => {
      setPokemon(pokemonListWithDetails);
      setLoading(false);
    }, 1000);
  };

  const handleGetAllPokemon = async () => {
    setLoading(true);
    const pokemonListWithDetails = await getAllPokemon(totalPokemon);
    setPokemon(pokemonListWithDetails);
    setLoading(false);
  };

  const handleLoadMore = async () => {
    const pokemonListWithDetails = await loadMore(start);
    setPokemon(pokemonListWithDetails);
    setStart(start + 12);
  };

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

  useEffect(() => {
    handleGetPokemon();
  }, []);

  return {
    pokemon,
    loading,
    selectedSortOption,
    handleGetRandomPokemon,
    handleGetPokemon,
    handleGetAllPokemon,
    handleLoadMore,
    handleSelectChange,
  };
};

export default usePokemonList; 