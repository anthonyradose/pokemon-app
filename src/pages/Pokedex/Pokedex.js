// Import necessary libraries and components
import React, { useEffect, useState } from "react"; // Import React and hooks for state and effects
import Pokedex from "pokedex-promise-v2"; // Import the Pokedex API
import PokemonCard from "../../components/PokemonCard/PokemonCard"; // Import the PokemonCard component for displaying individual Pokemon
import "./Pokedex.css"; // Import styles for the Pokedex component
import Pokeball from "../../components/Pokeball/Pokeball"; // Import a loading indicator component
import Search from "../../components/Search/Search"; // Import the search component for filtering Pokemon
import LoopRoundedIcon from "@mui/icons-material/LoopRounded"; // Import an icon for randomization button
import { getPokemonStuff } from "../../utils"; // Import a utility function for fetching additional Pokemon data

// Instantiate the Pokedex API
const P = new Pokedex();

// Function to get detailed information about a Pokemon by its name
const getPokemonDetails = async (pokemon) => {
  const item = await P.getPokemonByName(pokemon.name); // Fetch details using Pokedex API
  return item; // Return the fetched details
};

const Home = () => {
  // State variables for managing Pokemon data, loading status, and sorting options
  const [pokemon, setPokemon] = useState([]); // State for storing the list of Pokemon
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [start, setStart] = useState(12); // State for pagination (to load more Pokemon)
  const [selectedSortOption, setSelectedSortOption] = useState("numberAsc"); // State for selected sorting option
  const totalPokemon = 898; // Constant for the total number of Pokemon

  // Function to fetch a random selection of Pokemon
  const getRandomPokemon = async () => {
    setLoading(true); // Set loading to true while fetching data
    const pokemonList = await P.getPokemonsList({ // Fetch a list of Pokemon
      limit: totalPokemon, // Fetch a maximum of totalPokemon
      offset: 0, // Start from the beginning of the list
    });
    const randomPokemonArray = []; // Array to hold randomly selected Pokemon
    for (let i = 1; i < 13; i += 1) { // Loop to select 12 random Pokemon
      randomPokemonArray.push(
        pokemonList.results[Math.floor(Math.random() * totalPokemon)] // Push a random Pokemon to the array
      );
    }
    // Fetch details for the selected random Pokemon and update the state
    const pokemonListWithDetails = await Promise.all(
      randomPokemonArray.map(getPokemonDetails)
    );
    setPokemon(pokemonListWithDetails); // Update state with the detailed Pokemon data
    setLoading(false); // Set loading to false after data fetch
  };

  // Function to fetch the first 12 Pokemon for initial display
  const getPokemon = async () => {
    setLoading(true); // Set loading to true while fetching data
    const pokemonList = await P.getPokemonsList({ // Fetch a list of 12 Pokemon
      limit: 12, // Limit the number of Pokemon fetched to 12
      offset: 0, // Start from the beginning of the list
    });

    if (pokemonList?.results) { // Check if results exist
      // Fetch additional details for the Pokemon using a utility function
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map((pokemon) => getPokemonStuff(pokemon))
      );
      setTimeout(() => { // Delay the setting of the Pokemon data
        setPokemon(pokemonListWithDetails); // Update state with detailed Pokemon data
        setLoading(false); // Set loading to false after fetching
      }, 1000); // Delay of 1 second
    }
  };

  // Function to fetch all Pokemon for potential future use
  const getAllPokemon = async () => {
    setLoading(true); // Set loading to true while fetching data
    const pokemonList = await P.getPokemonsList({ // Fetch the complete list of Pokemon
      limit: totalPokemon, // Fetch the maximum number of Pokemon
      offset: 0, // Start from the beginning of the list
    });

    if (pokemonList?.results) { // Check if results exist
      // Fetch details for all Pokemon and update the state
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(getPokemonDetails)
      );
      setPokemon(pokemonListWithDetails); // Update state with detailed Pokemon data
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Function to load more Pokemon when requested
  const loadMore = async () => {
    const pokemonList = await P.getPokemonsList({ // Fetch more Pokemon
      limit: start + 12, // Increase the limit based on the current start value
      offset: 0, // Start from the beginning of the list
    });

    if (pokemonList?.results) { // Check if results exist
      // Fetch details for the newly fetched Pokemon and update the state
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(getPokemonDetails)
      );

      setPokemon(pokemonListWithDetails); // Update state with detailed Pokemon data
      setStart(start + 12); // Increment the start value for pagination
    }
  };

  // Effect hook to fetch the initial Pokemon data on component mount
  useEffect(() => {
    getPokemon(); // Fetch initial Pokemon data
  }, []);

  // Render loading indicator if data is being fetched
  if (loading) {
    return <Pokeball />; // Show loading component while data is loading
  }

  // Function to handle sorting options when changed
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value; // Get the selected sorting option
    setSelectedSortOption(selectedOption); // Update state with the selected option
  
    setLoading(true); // Set loading to true while sorting
    let sortedPokemon = []; // Array to hold sorted Pokemon
  
    // Sort Pokemon based on the selected option
    if (selectedOption === "numberAsc") {
      sortedPokemon = pokemon.slice().sort((a, b) => a.id - b.id); // Sort by ascending number
    } else if (selectedOption === "numberDesc") {
      sortedPokemon = pokemon.slice().sort((a, b) => b.id - a.id); // Sort by descending number
    } else if (selectedOption === "nameAsc") {
      sortedPokemon = pokemon.slice().sort((a, b) => a.name.localeCompare(b.name)); // Sort by name ascending
    } else if (selectedOption === "nameDesc") {
      sortedPokemon = pokemon.slice().sort((a, b) => b.name.localeCompare(a.name)); // Sort by name descending
    }
  
    setLoading(false); // Set loading to false after sorting
    setPokemon(sortedPokemon); // Update state with the sorted Pokemon
  };

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
          onClick={getRandomPokemon} // Event handler for random Pokemon
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
          onClick={loadMore} // Event handler for loading more Pokemon
        >
          Load More Pokémon
        </button>
        <button
          className="load-all-button"
          onClick={getAllPokemon} // Event handler for loading all Pokemon
        >
          Load All Pokémon
        </button>
      </div>
    </div>
  );
};

export default Home; // Export the Home component for use in other parts of the application