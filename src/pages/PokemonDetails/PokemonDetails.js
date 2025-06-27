import React from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import Pokeball from "../../components/common/Pokeball/Pokeball";
import PokemonTitle from "../../components/features/PokemonTitle/PokemonTitle";
import PokemonType from "../../components/features/PokemonType/PokemonType";
import Pagination from "../../components/common/Pagination/Pagination";
import PokemonStats from "../../components/features/PokemonStats/PokemonStats";
import PokemonImage from "../../components/features/PokemonImage/PokemonImage";
import PokemonInfo from "../../components/features/PokemonInfo/PokemonInfo";
import EvolutionChart from "../../components/features/EvolutionChart/EvolutionChart";
import PokemonVersion from "../../components/features/PokemonVersion/PokemonVersion";
import PokemonWeakness from "../../components/features/PokemonWeakness/PokemonWeakness";
import { getTypeArray } from "../../utils/formatters";
import BackToHome from "../../components/common/BackToHome/BackToHome";
import usePokemonDetails from "../../hooks/usePokemonDetails";

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemon, loading, pageLoaded } = usePokemonDetails(name);

  if (loading && !pageLoaded) {
    return (
      <div className="loading-screen">
        <Pokeball />
      </div>
    );
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
    <main className="pokemon-page" role="main" aria-label={`${pokemon.name} details`}>
      <Pagination pokemonItem={pokemon} />
      
      <PokemonTitle pokemonItem={pokemon} />

      <div className="pokemon-details-layout">
        <div className="pokemon-details-container">
          <section className="pokemon-details-main" aria-labelledby="pokemon-details-main-content">
            <h2 id="pokemon-details-main-content" className="sr-only">Pokémon Information</h2>
            
            <div className="pokemon-visual-section" role="complementary" aria-label="Pokémon visual information">
              <figure aria-label={`${pokemon.name} official artwork`}>
                <PokemonImage
                  src={
                    pokemon.sprites?.other?.["official-artwork"]?.front_default
                  }
                  alt={`Official artwork of ${pokemon.name}`}
                />
              </figure>
              <PokemonStats pokemonItem={pokemon} />
            </div>
            
            <div className="pokemon-info-section" role="complementary" aria-label="Pokémon details and characteristics">
              <section className="pokemon-meta-section" aria-labelledby="pokemon-details-versions-info">
                <h3 id="pokemon-details-versions-info" className="sr-only">Versions and Information</h3>
                <PokemonVersion blue={blue} red={red} />
                <PokemonInfo pokemonItem={pokemon} />
              </section>
              
              <section className="pokemon-battle-info" aria-labelledby="pokemon-details-type-weaknesses">
                <h3 id="pokemon-details-type-weaknesses" className="sr-only">Type and Weaknesses</h3>
                <div className="pokemon-type-div">
                  <h4 className="pokemon-type-heading">Type</h4>
                  <PokemonType typesArray={typesArray} isLarge={true} />
                </div>
                <PokemonWeakness
                  damageStuff1={damageStuff1}
                  damageStuff2={damageStuff2}
                  isLarge={true}
                />
              </section>
            </div>
          </section>

          <section aria-labelledby="pokemon-evolution-chart">
            <h2 id="pokemon-evolution-chart" className="sr-only">Evolution Chart</h2>
            <EvolutionChart pokemonItem={pokemon} />
          </section>
          
          <BackToHome />
        </div>
      </div>
    </main>
  );
};

export default PokemonDetails; 