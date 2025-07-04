import { useState, useEffect } from "react";
import { getPokemon, getAllPokemon, loadMore, getRandomPokemon } from "../services/pokemonListService";
import { appLimits } from "../constants/appLimits";
import { sortOptions } from "../constants/sortConfig";

const usePokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(appLimits.initialPokemonCount);
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions.numberAsc);
  const totalPokemon = appLimits.totalPokemon;

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
    setStart(start + appLimits.loadMoreCount);
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSortOption(selectedOption);
    setLoading(true);
    let sortedPokemon = [];
    
    if (selectedOption === sortOptions.numberAsc) {
      sortedPokemon = pokemon.slice().sort((a, b) => a.id - b.id);
    } else if (selectedOption === sortOptions.numberDesc) {
      sortedPokemon = pokemon.slice().sort((a, b) => b.id - a.id);
    } else if (selectedOption === sortOptions.nameAsc) {
      sortedPokemon = pokemon.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === sortOptions.nameDesc) {
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