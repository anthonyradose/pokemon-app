import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PokemonDetails.module.css";
import Pokeball from "../../components/common/Pokeball";
import PokemonTitle from "../../components/features/PokemonTitle";
import PokemonType from "../../components/features/PokemonType";
import Pagination from "../../components/common/Pagination";
import PokemonStats from "../../components/features/PokemonStats";
import PokemonImage from "../../components/features/PokemonImage";
import PokemonInfo from "../../components/features/PokemonInfo";
import EvolutionChart from "../../components/features/EvolutionChart";
import PokemonVersion from "../../components/features/PokemonVersion";
import PokemonWeakness from "../../components/features/PokemonWeakness";
import { getTypeArray } from "../../utils/formatters";
import BackToHome from "../../components/common/BackToHome";
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
    <main className={styles.pokemonPage} role="main" aria-label={`${pokemon.name} details`}>
      <Pagination pokemonItem={pokemon} />
      
      <PokemonTitle pokemonItem={pokemon} />

      <div className={styles.pokemonDetailsLayout}>
        <article className={styles.pokemonDetailsContainer}>
          <section className={styles.pokemonDetailsMain} aria-labelledby="pokemon-details-main-content">
            <h2 id="pokemon-details-main-content" className="sr-only">Pokémon Information</h2>
            
            <div className={styles.pokemonVisualSection} role="complementary" aria-label="Pokémon visual information">
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
            
            <div className={styles.pokemonInfoSection} role="complementary" aria-label="Pokémon details and characteristics">
              <section className={styles.pokemonMetaSection} aria-labelledby="pokemon-details-versions-info">
                <h3 id="pokemon-details-versions-info" className="sr-only">Versions and Information</h3>
                <PokemonVersion blue={blue} red={red} />
                <PokemonInfo pokemonItem={pokemon} />
              </section>
              
              <section className={styles.pokemonBattleInfo} aria-labelledby="pokemon-details-type-weaknesses">
                <h3 id="pokemon-details-type-weaknesses" className="sr-only">Type and Weaknesses</h3>
                <div className={styles.pokemonTypeDiv}>
                  <h4 className={styles.pokemonTypeHeading}>Type</h4>
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
        </article>
      </div>
    </main>
  );
};

export default PokemonDetails; 