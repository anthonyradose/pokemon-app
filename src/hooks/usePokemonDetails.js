import { useState, useEffect } from "react";
import { getDetailedPokemonDetails } from "../services/pokemonApi";

const usePokemonDetails = (name) => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const handleGetPokemonDetails = async (name) => {
    setLoading(true);
    const item = await getDetailedPokemonDetails(name);
    setPokemon(item);
    setPageLoaded(true);
    setLoading(false);
  };

  useEffect(() => {
    if (name) {
      handleGetPokemonDetails(name);
    }
  }, [name]);

  return {
    pokemon,
    loading,
    pageLoaded,
  };
};

export default usePokemonDetails; 