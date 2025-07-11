// Import necessary libraries and components
import React from "react"; // Import React and hooks for state and effects
import Card from "../../components/features/Card"; // Import the Card component for displaying individual Pokemon
import styles from "./PokemonList.module.css"; // Import styles for the PokemonList component
import Loader from "../../components/common/Loader"; // Import a loading indicator component
import Search from "../../components/features/Search"; // Import the search component for filtering Pokemon
import LoopRoundedIcon from "@mui/icons-material/LoopRounded"; // Import an icon for randomization button
import usePokemonList from "../../hooks/usePokemonList"; // Import the custom hook
import { sortLabels } from "../../constants/sortConfig";

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
        <Loader />
      </div>
    );
  }

  // Render the component
  return (
    <main className={styles.container} role="main" aria-label="Pokédex">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Pokédex</h1>
      </div>
      
      <Search pokemonItem={pokemon} />
      
      <div className={styles.filtersContainer} role="toolbar" aria-label="Pokémon filters">
        <button
          className={styles.shufflePokemonButton}
          type="button"
          aria-label="Get random Pokémon"
          onClick={handleGetRandomPokemon}
        >
          <LoopRoundedIcon aria-hidden="true" />
          Surprise Me!
        </button>
        <div className={styles.selectWrapper}>
          <select 
            className={styles.sortOrder} 
            onChange={handleSelectChange} 
            value={selectedSortOption}
            aria-label="Sort Pokémon"
          >
                    <option value="numberAsc">{sortLabels.numberAsc}</option>
        <option value="numberDesc">{sortLabels.numberDesc}</option>
        <option value="nameAsc">{sortLabels.nameAsc}</option>
        <option value="nameDesc">{sortLabels.nameDesc}</option>
          </select>
        </div>
      </div>
      
      <ul className={styles.resultsContainer}>
        {pokemon?.map((poke) => (
          <li key={poke.name}>
            <Card pokemonItem={poke} />
          </li>
        ))}
      </ul>
      
      <div className={styles.loadMoreContainer}>
        <button
          className={styles.loadMoreButton}
          onClick={handleLoadMore}
          aria-label="Load more Pokémon"
        >
          Load More Pokémon
        </button>
        <button
          className={styles.loadAllButton}
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