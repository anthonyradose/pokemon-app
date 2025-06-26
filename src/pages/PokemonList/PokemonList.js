// Import necessary libraries and components
import React from "react"; // Import React and hooks for state and effects
import PokemonCard from "../../components/features/PokemonCard/PokemonCard"; // Import the PokemonCard component for displaying individual Pokemon
import "./PokemonList.css"; // Import styles for the PokemonList component
import Pokeball from "../../components/common/Pokeball/Pokeball"; // Import a loading indicator component
import PokemonSearch from "../../components/features/PokemonSearch/PokemonSearch"; // Import the search component for filtering Pokemon
import LoopRoundedIcon from "@mui/icons-material/LoopRounded"; // Import an icon for randomization button
import usePokemonList from "../../hooks/usePokemonList"; // Import the custom hook

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
    <main className="pokedexContainer" role="main" aria-label="Pokédex">
      <div className="titleContainer">
        <h1 className="titleH1">Pokédex</h1>
      </div>
      
      <PokemonSearch pokemonItem={pokemon} />
      
      <div className="filtersContainer" role="toolbar" aria-label="Pokémon filters">
        <button
          className="randomizer"
          type="button"
          aria-label="Get random Pokémon"
          onClick={handleGetRandomPokemon}
        >
          <LoopRoundedIcon aria-hidden="true" />
          Surprise Me!
        </button>
        <div className="selectWrapper">
          <select 
            id="sortOrder" 
            onChange={handleSelectChange} 
            value={selectedSortOption}
            aria-label="Sort Pokémon"
          >
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
          onClick={handleLoadMore}
          aria-label="Load more Pokémon"
        >
          Load More Pokémon
        </button>
        <button
          className="load-all-button"
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