import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useSearch from "../../../hooks/useSearch";
import styles from "./Search.module.css";
import SearchResults from "./SearchResults";

const Search = () => {
  const {
    name,
    foundPokemon,
    filter,
    handlePokemonSelect,
    handleSearch,
    clearResults,
  } = useSearch();

  // Extracted handler for search result keydown
  const handleResultKeyDown = (poke) => (event) => {
    if (event.key === 'Enter') {
      handlePokemonSelect(poke);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form
        className={styles.searchInputContainer}
        onSubmit={e => {
          e.preventDefault();
          handleSearch();
        }}
        role="search"
        aria-label="Pokémon search form"
      >
        <label htmlFor="search-input" className="sr-only">Search for Pokémon</label>
        <input
          id="search-input"
          type="search"
          value={name}
          onChange={filter}
          className={styles.searchInput}
          aria-label="Search for Pokémon by name or number"
          aria-describedby="search-instructions"
        />
        <button
          className={styles.buttonResult}
          type="submit"
          aria-label="Search"
        >
          <SearchIcon aria-hidden="true" />
          <span className="sr-only">Search</span>
        </button>
      </form>

      <SearchResults
        foundPokemon={foundPokemon}
        handlePokemonSelect={handlePokemonSelect}
        clearResults={clearResults}
        handleResultKeyDown={handleResultKeyDown}
      />

      <h3 id="search-instructions" className={styles.searchText}>
        Search for a Pokémon by name or using its National Pokédex number.
      </h3>
    </div>
  );
};

export default Search;
