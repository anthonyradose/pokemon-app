import P from "./pokedexClient";

const pokemonCache = new Map();

const getCachedPokemonDetails = async (pokemon) => {
  if (pokemonCache.has(pokemon.name)) {
    return pokemonCache.get(pokemon.name);
  } else {
    const item = await P.getPokemonByName(pokemon.name);
    pokemonCache.set(pokemon.name, item);
    return item;
  }
};

export {
  getCachedPokemonDetails
};
