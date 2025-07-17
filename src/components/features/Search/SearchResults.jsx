import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Search.module.css";

const SearchResults = ({
  foundPokemon,
  handlePokemonSelect,
  clearResults,
  handleResultKeyDown,
}) => {
  if (!foundPokemon || foundPokemon.length === 0) return null;

  return (
    <OutsideClickHandler onOutsideClick={clearResults}>
        <ul className={styles.searchResultsList} role="listbox">
          {foundPokemon.map((poke, index) => (
            <li
              className={styles.searchResultItem}
              key={`${poke}-${index}`}
              onClick={() => handlePokemonSelect(poke)}
              onKeyDown={handleResultKeyDown(poke)}
              tabIndex={0}
              role="option"
              aria-label={`Select ${poke}`}
            >
              {poke}
            </li>
          ))}
        </ul>
    </OutsideClickHandler>
  );
};

export default SearchResults; 