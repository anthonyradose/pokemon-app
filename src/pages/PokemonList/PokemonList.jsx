// Import necessary libraries and components
import React from "react"; // Import React and hooks for state and effects
import Card from "../../components/features/Card"; // Import the Card component for displaying individual Pokemon
import styles from "./PokemonList.module.css"; // Import styles for the PokemonList component
import Loader from "../../components/common/Loader"; // Import a loading indicator component
import Search from "../../components/features/Search"; // Import the search component for filtering Pokemon
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
            <option value="numberAsc">{SORT_LABELS.numberAsc}</option>
            <option value="numberDesc">{SORT_LABELS.numberDesc}</option>
            <option value="nameAsc">{SORT_LABELS.nameAsc}</option>
            <option value="nameDesc">{SORT_LABELS.nameDesc}</option>
          </select>
        </div>
      </div>
      
      <div className={styles.resultsContainer}>
        {pokemon?.map((poke) => (
          <Card pokemonItem={poke} key={poke.name} />
        ))}
      </div>
      
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