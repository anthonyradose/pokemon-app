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
    <div className="search-container">
      <div className="conditional-search-div">
        <div className="search-div1">
          <div className="search-input-container-div">
            <div className="search-input-container">
              <input
                type="search"
                value={name}
                onChange={filter}
                className="search-input"
                onClick={filter}
              />

              <button
                className="button-result"
                onClick={handleSearch}
              >
                <SearchIcon></SearchIcon>
              </button>
            </div>
            <div className="pokemon-list">
              {foundPokemon && foundPokemon.length > 0 ? (
                <OutsideClickHandler
                  className="pokedexResultsDiv"
                  onOutsideClick={clearResults}
                >
                  {foundPokemon?.map((poke) => (
                    <div
                      className="jimmy"
                      key={poke.name}
                      onClick={() => handlePokemonSelect(poke.name)}
                    >
                      {poke.name}
                    </div>
                  ))}
                </OutsideClickHandler>
              ) : null}
            </div>
          </div>
        </div>
        <div className="search-div2">
          <div className="green-banner">
            <h3 className="green-bannerh3">
              Search for a Pokémon by name or using its National Pokédex number.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonSearch;
