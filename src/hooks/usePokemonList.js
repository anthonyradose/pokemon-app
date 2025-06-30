import { useState, useEffect } from "react";
import { getPokemon, getAllPokemon, loadMore, getRandomPokemon } from "../services/pokemonListApi";
import { TOTAL_POKEMON, INITIAL_POKEMON_COUNT, LOAD_MORE_COUNT } from "../constants/pokemon";
import { SORT_OPTIONS } from "../constants/sortOptions";

const usePokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(INITIAL_POKEMON_COUNT);
  const [selectedSortOption, setSelectedSortOption] = useState(SORT_OPTIONS.NUMBER_ASC);
  const totalPokemon = TOTAL_POKEMON;

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
    setLoading(true);
    const pokemonListWithDetails = await loadMore(start);
    setPokemon(pokemonListWithDetails);
    setStart(start + LOAD_MORE_COUNT);
    setLoading(false);
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSortOption(selectedOption);
    setLoading(true);
    let sortedPokemon = [];
    
    if (selectedOption === SORT_OPTIONS.NUMBER_ASC) {
      sortedPokemon = pokemon.slice().sort((a, b) => a.id - b.id);
    } else if (selectedOption === SORT_OPTIONS.NUMBER_DESC) {
      sortedPokemon = pokemon.slice().sort((a, b) => b.id - a.id);
    } else if (selectedOption === SORT_OPTIONS.NAME_ASC) {
      sortedPokemon = pokemon.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === SORT_OPTIONS.NAME_DESC) {
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