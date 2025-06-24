import React from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import Pokeball from "../../components/Pokeball/Pokeball";
import PokemonTitle from "../../components/PokemonTitle/PokemonTitle";
import PokemonType from "../../components/PokemonType/PokemonType";
import Pagination from "../../components/Pagination/Pagination";
import PokemonStats from "../../components/PokemonStats/PokemonStats";
import PokemonImage from "../../components/PokemonImage/PokemonImage";
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo";
import EvolutionChart from "../../components/EvolutionChart/EvolutionChart";
import PokemonVersion from "../../components/PokemonVersion/PokemonVersion";
import PokemonWeakness from "../../components/PokemonWeakness/PokemonWeakness";
import { getTypeArray } from "../../utils/formatters";
import BackToHome from "../../components/BackToHome/BackToHome";
import usePokemonDetails from "../../hooks/usePokemonDetails";

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemon, loading, pageLoaded } = usePokemonDetails(name);

  if (loading && !pageLoaded) {
    return <Pokeball />;
  }

  if (!pokemon) {
    return null;
  }

  let blue = pokemon?.spec?.flavor_text_entries?.[0]?.flavor_text;
  let red = pokemon?.spec?.flavor_text_entries?.[3]?.flavor_text;
  let damageStuff1 = pokemon?.damageStuff1;
  let damageStuff2 = pokemon?.damageStuff2;

  const typesArray = getTypeArray(pokemon.types);

  return (
    <div className="pokemon-page">
      <Pagination pokemonItem={pokemon} />
      <PokemonTitle pokemonItem={pokemon} />

      <div className="pokemon-container-div">
        <div className="pokemon-container">
          <div className="main-contents">
            <div className="left-column">
              <PokemonImage
                src={
                  pokemon.sprites?.other?.["official-artwork"]?.front_default
                }
              />
              <PokemonStats pokemonItem={pokemon} />
            </div>
            <div className="right-column">
              <div className="versions-and-info-container">
                <PokemonVersion blue={blue} red={red} />
                <PokemonInfo pokemonItem={pokemon} />
              </div>
              <div className="type-and-weaknesses-container">
                <div className="type-div">
                  <h3 className="type-h3">Type</h3>
                  <PokemonType typesArray={typesArray} isLarge={true} />
                </div>
                <PokemonWeakness
                  damageStuff1={damageStuff1}
                  damageStuff2={damageStuff2}
                  isLarge={true}
                />
              </div>
            </div>
          </div>

          <EvolutionChart pokemonItem={pokemon} />
          <BackToHome />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails; 