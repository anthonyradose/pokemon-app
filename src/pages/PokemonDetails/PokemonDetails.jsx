import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PokemonDetails.module.css";
import Loader from "../../components/common/Loader";
import Title from "../../components/features/Title";
import Types from "../../components/features/Types";
import Pagination from "../../components/common/Pagination";
import Stats from "../../components/features/Stats";

import Info from "../../components/features/Info";
import Evolution from "../../components/features/Evolution";
import Version from "../../components/features/Version";
import Weakness from "../../components/features/Weakness";
import { getTypeArray } from "../../utils/pokemonFormatters";

import usePokemonDetails from "../../hooks/usePokemonDetails";

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemon, loading, pageLoaded } = usePokemonDetails(name);

  if (loading && !pageLoaded) {
    return (
      <div className="loading-screen">
        <Loader />
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
    <main className={styles.page} role="main" aria-label={`${pokemon.name} details`}>
      <Pagination pokemonItem={pokemon} />
      
      <Title pokemonItem={pokemon} />

      <div className={styles.detailsLayout}>
        <article className={styles.detailsContainer}>
          <section className={styles.detailsMain} aria-labelledby="pokemon-details-main-content">
          <h2 id="pokemon-details-main-content" className="sr-only">Pokémon Information</h2>
          
          <div className={styles.visualSection} role="complementary" aria-label="Pokémon visual information">
            <figure aria-label={`${pokemon.name} official artwork`}>
              <img
                src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
                alt={`Official artwork of ${pokemon.name}`}
                className={styles.pokemonImage}
              />
            </figure>
            <Stats pokemonItem={pokemon} />
          </div>
          
          <div className={styles.infoSection} role="complementary" aria-label="Pokémon details and characteristics">
            <section className={styles.metaSection} aria-labelledby="pokemon-details-versions-info">
              <h3 id="pokemon-details-versions-info" className="sr-only">Versions and Information</h3>
              <Version blue={blue} red={red} />
              <Info pokemonItem={pokemon} />
            </section>
            
            <section className={styles.battleInfo} aria-labelledby="pokemon-details-type-weaknesses">
              <h3 id="pokemon-details-type-weaknesses" className="sr-only">Type and Weaknesses</h3>
              <div className={styles.typeSection}>
                <h4 className={styles.typeHeading}>Type</h4>
                <Types typesArray={typesArray} isLarge={true} />
              </div>
              <Weakness
                damageStuff1={damageStuff1}
                damageStuff2={damageStuff2}
                isLarge={true}
              />
            </section>
          </div>
        </section>

        <section aria-labelledby="pokemon-evolution-chain">
          <h2 id="pokemon-evolution-chain" className="sr-only">Evolution Chain</h2>
          <Evolution pokemonItem={pokemon} />
        </section>
        
        <section>
          <Link to="/" className={styles.backToHomeLink}>
            Explore More Pokémon
          </Link>
        </section>
        </article>
      </div>
    </main>
  );
};

export default PokemonDetails; 