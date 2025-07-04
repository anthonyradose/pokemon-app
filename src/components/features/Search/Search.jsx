import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import OutsideClickHandler from "react-outside-click-handler";
import usePokemonSearch from "../../../hooks/usePokemonSearch";
import styles from "./Search.module.css";

const Search = () => {
  const {
    name,
    foundPokemon,
    filter,
    handlePokemonSelect,
    handleSearch,
    clearResults,
  } = usePokemonSearch();

  return (
    <section className={styles.searchContainer} aria-label="Pokémon search">
      <div className={styles.searchWrapper}>
        <div className={styles.inputSection}>
          <div className={styles.inputWrapper}>
            <div className={styles.searchInputContainer}>
              <input
                type="search"
                value={name}
                onChange={filter}
                className={styles.searchInput}
                onClick={filter}
                aria-label="Search for Pokémon by name or number"
                aria-describedby="search-instructions"
              />

              <button
                className={styles.buttonResult}
                onClick={handleSearch}
                type="button"
                aria-label="Search"
              >
                <SearchIcon aria-hidden="true" />
              </button>
            </div>
            {foundPokemon && foundPokemon.length > 0 && (
              <OutsideClickHandler onOutsideClick={clearResults}>
                <div className={styles.searchList}>
                  <ul className={styles.searchResultsList} role="listbox">
                    {foundPokemon?.map((poke, index) => (
                      <li
                        className={styles.searchResultItem}
                        key={`${poke}-${index}`}
                        onClick={() => handlePokemonSelect(poke)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter') {
                            handlePokemonSelect(poke);
                          }
                        }}
                        tabIndex={0}
                        role="option"
                        aria-label={`Select ${poke}`}
                      >
                        {poke}
                      </li>
                    ))}
                  </ul>
                </div>
              </OutsideClickHandler>
            )}
          </div>
        </div>
        <div className={styles.resultsSection}>
          <div className={styles.searchBanner}>
            <h3 id="search-instructions" className={styles.searchText}>
              Search for a Pokémon by name or using its National Pokédex number.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
