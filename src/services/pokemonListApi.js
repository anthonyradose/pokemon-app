import P from "./pokedexClient";
import { getCachedPokemonDetails } from "./pokemonCache";
import { TOTAL_POKEMON, RANDOM_POKEMON_COUNT, INITIAL_POKEMON_COUNT, LOAD_MORE_COUNT } from "../constants/pokemon";

// Function to get basic information about a Pokemon by its name
const getBasicPokemonDetails = async (pokemon) => {
  const item = await P.getPokemonByName(pokemon.name);
  return item;
};

// Function to fetch a random selection of Pokemon
const getRandomPokemon = async (totalPokemon = TOTAL_POKEMON) => {
  const pokemonList = await P.getPokemonsList({
    limit: totalPokemon,
    offset: 0,
  });
  const randomPokemonArray = [];
  for (let i = 1; i < RANDOM_POKEMON_COUNT; i += 1) {
    randomPokemonArray.push(
      pokemonList.results[Math.floor(Math.random() * totalPokemon)]
    );
  }
  // Fetch details for the selected random Pokemon
  const pokemonListWithDetails = await Promise.all(
    randomPokemonArray.map(getBasicPokemonDetails)
  );
  return pokemonListWithDetails;
};

// Function to fetch the first 12 Pokemon for initial display
const getPokemon = async () => {
  const pokemonList = await P.getPokemonsList({
    limit: INITIAL_POKEMON_COUNT,
    offset: 0,
  });

  if (pokemonList?.results) {
    // Fetch additional details for the Pokemon using a utility function
    const pokemonListWithDetails = await Promise.all(
      pokemonList.results?.map((pokemon) => getCachedPokemonDetails(pokemon))
    );
    return pokemonListWithDetails;
  }
  return [];
};

// Function to fetch all Pokemon for potential future use
const getAllPokemon = async (totalPokemon = TOTAL_POKEMON) => {
  const pokemonList = await P.getPokemonsList({
    limit: totalPokemon,
    offset: 0,
  });

  if (pokemonList?.results) {
    // Fetch details for all Pokemon
    const pokemonListWithDetails = await Promise.all(
      pokemonList.results?.map(getBasicPokemonDetails)
    );
    return pokemonListWithDetails;
  }
  return [];
};

// Function to load more Pokemon when requested
const loadMore = async (start) => {
  const pokemonList = await P.getPokemonsList({
    limit: start + LOAD_MORE_COUNT,
    offset: 0,
  });

  if (pokemonList?.results) {
    // Fetch details for the newly fetched Pokemon
    const pokemonListWithDetails = await Promise.all(
      pokemonList.results?.map(getBasicPokemonDetails)
    );
    return pokemonListWithDetails;
  }
  return [];
};

export {
  getBasicPokemonDetails,
  getRandomPokemon,
  getPokemon,
  getAllPokemon,
  loadMore,
}; 