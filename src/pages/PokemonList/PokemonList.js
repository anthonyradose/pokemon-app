// Import necessary libraries and components
import React from "react"; // Import React and hooks for state and effects
import PokemonCard from "../../components/features/PokemonCard"; // Import the PokemonCard component for displaying individual Pokemon
import "./PokemonList.css"; // Import styles for the PokemonList component
import Pokeball from "../../components/common/Pokeball"; // Import a loading indicator component
import PokemonSearch from "../../components/features/PokemonSearch"; // Import the search component for filtering Pokemon
import LoopRoundedIcon from "@mui/icons-material/LoopRounded"; // Import an icon for randomization button
import usePokemonList from "../../hooks/usePokemonList"; // Import the custom hook
import { SORT_LABELS } from "../../constants/sortOptions";

const PokemonList = () => {
  const {
    pokemon,
    loading,
    selectedSortOption,
    handleGetRandomPokemon,
    handleGetAllPokemon,
    handleLoadMore,
    handleSelectChange,
  } = usePokemonList();

  // Render loading indicator if data is being fetched
  if (loading) {
    return (
      <div className="loading-screen">
        <Pokeball />
      </div>
    );
  }

  // Render the component
  return (
    <main className="pokedex-container" role="main" aria-label="Pokédex">
      <div className="pokedex-title-container">
        <h1 className="pokedex-title">Pokédex</h1>
      </div>
      
      <PokemonSearch pokemonItem={pokemon} />
      
      <div className="pokedex-filters-container" role="toolbar" aria-label="Pokémon filters">
        <button
          className="shuffle-pokemon-button"
          type="button"
          aria-label="Get random Pokémon"
          onClick={handleGetRandomPokemon}
        >
          <LoopRoundedIcon aria-hidden="true" />
          Surprise Me!
        </button>
        <div className="pokedex-select-wrapper">
          <select 
            className="pokedex-sort-order" 
            onChange={handleSelectChange} 
            value={selectedSortOption}
            aria-label="Sort Pokémon"
          >
            <option value="numberAsc">{SORT_LABELS.numberAsc}</option>
            <option value="numberDesc">{SORT_LABELS.numberDesc}</option>
            <option value="nameAsc">{SORT_LABELS.nameAsc}</option>
            <option value="nameDesc">{SORT_LABELS.nameDesc}</option>
          </select>
        </div>
      </div>
      
      <div className="pokedex-results-container">
        {pokemon?.map((poke) => (
          <PokemonCard pokemonItem={poke} key={poke.name} />
        ))}
      </div>
      
      <div className="pokedex-load-more-container">
        <button
          className="pokedex-load-more-button"
          onClick={handleLoadMore}
          aria-label="Load more Pokémon"
        >
          Load More Pokémon
        </button>
        <button
          className="pokedex-load-all-button"
          onClick={handleGetAllPokemon}
          aria-label="Load all Pokémon"
        >
          Load All Pokémon
        </button>
      </div>
    </main>
  );
};

export default PokemonList; // Export the PokemonList component for use in other parts of the application 