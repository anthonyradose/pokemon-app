import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import OutsideClickHandler from "react-outside-click-handler";
import useSearch from "../../../hooks/useSearch";
import "./PokemonSearch.css";

const PokemonSearch = () => {
  const {
    name,
    foundPokemon,
    filter,
    handlePokemonSelect,
    handleSearch,
    clearResults,
  } = useSearch();

  return (
    <section className="search-container" aria-label="Pokémon search">
      <div className="conditional-search-div">
        <div className="search-input-section">
          <div className="search-input-container-div">
            <div className="search-input-container">
              <input
                type="search"
                value={name}
                onChange={filter}
                className="search-input"
                onClick={filter}
                aria-label="Search for Pokémon by name or number"
                aria-describedby="search-instructions"
              />

              <button
                className="button-result"
                onClick={handleSearch}
                type="button"
                aria-label="Search"
              >
                <SearchIcon aria-hidden="true" />
              </button>
            </div>
            {foundPokemon && foundPokemon.length > 0 && (
              <OutsideClickHandler onOutsideClick={clearResults}>
                <div className="pokemon-search-list">
                  <ul className="pokemon-search-results-list" role="listbox">
                    {foundPokemon?.map((poke, index) => (
                      <li
                        className="pokemon-search-result-item"
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
        <div className="pokemon-search-results-section">
          <div className="pokemon-search-banner">
            <h3 id="search-instructions" className="pokemon-search-text">
              Search for a Pokémon by name or using its National Pokédex number.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonSearch;
