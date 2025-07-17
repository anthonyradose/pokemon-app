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
      <section className={styles.titleContainer}>
        <h1 className="sr-only">Pokédex Title</h1>
        <h1 className={styles.title}>Pokédex</h1>
      </section>
      <section className={styles.searchContainer} aria-label="Pokémon search">
        <h2 className="sr-only">Search Pokémon</h2>
        <Search pokemonItem={pokemon} />
      </section>
      
      <nav className={styles.filtersContainer} role="toolbar" aria-label="Pokémon filters">
        <h2 className="sr-only">Filter and Sort Pokémon</h2>
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
          <label htmlFor="sort-order" className="sr-only">Sort Pokémon</label>
          <select 
            className={styles.sortOrder} 
            onChange={handleSelectChange} 
            value={selectedSortOption}
            id="sort-order"
          >
            <option value="numberAsc">{sortLabels.numberAsc}</option>
            <option value="numberDesc">{sortLabels.numberDesc}</option>
            <option value="nameAsc">{sortLabels.nameAsc}</option>
            <option value="nameDesc">{sortLabels.nameDesc}</option>
          </select>
        </div>
      </nav>
      <section   aria-label="Pokémon results">
        <h2 className="sr-only">Pokémon Results</h2>
        <ul className={styles.resultsContainer}>
          {pokemon?.map((poke) => (
            <li key={poke.name}>
              <Card pokemonItem={poke} />
            </li>
          ))}
        </ul>
        <div className={styles.loadMoreContainer}>
          <label htmlFor="load-more" className="sr-only">Load more Pokémon</label>
          <button
            type="button"
            className={styles.loadMoreButton}
            onClick={handleLoadMore}
            aria-label="Load more Pokémon"
            id="load-more"
          >
            Load More Pokémon
          </button>
          <button
            className={styles.loadAllButton}
            type="button"
            onClick={handleGetAllPokemon}
            aria-label="Load all Pokémon"
            id="load-all"
          >
            Load All Pokémon
          </button>
        </div>
      </section>
    </main>
  );
};

export default PokemonList; // Export the PokemonList component for use in other parts of the application 