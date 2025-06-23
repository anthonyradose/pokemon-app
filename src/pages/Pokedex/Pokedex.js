// Import necessary libraries and components
import React from "react"; // Import React and hooks for state and effects
import PokemonCard from "../../components/PokemonCard/PokemonCard"; // Import the PokemonCard component for displaying individual Pokemon
import "./Pokedex.css"; // Import styles for the Pokedex component
import Pokeball from "../../components/Pokeball/Pokeball"; // Import a loading indicator component
import Search from "../../components/Search/Search"; // Import the search component for filtering Pokemon
import LoopRoundedIcon from "@mui/icons-material/LoopRounded"; // Import an icon for randomization button
import usePokemonList from "../../hooks/usePokemonList"; // Import the custom hook

const Home = () => {
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
    return <Pokeball />; // Show loading component while data is loading
  }

  // Render the component
  return (
    <div className="pokedexContainer"> {/* Main container for the Pokedex */}
      <div className="titleContainer"> {/* Title section */}
        <h1 className="titleH1">Pokédex</h1> {/* Main title */}
      </div>
      <Search pokemonItem={pokemon} /> {/* Search component for filtering Pokemon */}
      <div className="filtersContainer"> {/* Filter buttons and sorting options */}
        <button
          className="randomizer" // Button to get random Pokemon
          type="button"
          alt="Surprise me!"
          onClick={handleGetRandomPokemon} // Event handler for random Pokemon
        >
          <LoopRoundedIcon /> {/* Randomization icon */}
          Surprise Me! {/* Button text */}
        </button>
        <div className="selectWrapper"> {/* Wrapper for the sort select input */}
          <select id="sortOrder" onChange={handleSelectChange} value={selectedSortOption}>
            {/* Dropdown for sorting options */}
            <option value="numberAsc">Lowest Number (First)</option>
            <option value="numberDesc">Highest Number (First)</option>
            <option value="nameAsc">A-Z</option>
            <option value="nameDesc">Z-A</option>
          </select>
        </div>
      </div>
      <div className="pokedexResultsContainer"> {/* Container for displaying Pokemon results */}
        {pokemon?.map((poke) => ( // Map through the Pokemon array
          <PokemonCard pokemonItem={poke} key={poke.name} /> // Render a PokemonCard for each Pokemon
        ))}
      </div>
      <div className="load-more-button-container"> {/* Container for load more buttons */}
        <button
          className="load-more-button"
          onClick={handleLoadMore} // Event handler for loading more Pokemon
        >
          Load More Pokémon
        </button>
        <button
          className="load-all-button"
          onClick={handleGetAllPokemon} // Event handler for loading all Pokemon
        >
          Load All Pokémon
        </button>
      </div>
    </div>
  );
};

export default Home; // Export the Home component for use in other parts of the application