import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PokemonDetails.module.css";
import Loader from "../../components/common/Loader";
import Types from "../../components/features/Types";
import Pagination from "../../components/common/Pagination";
import Stats from "../../components/features/Stats";

import Info from "../../components/features/Info";
import Evolution from "../../components/features/Evolution";
import Version from "../../components/features/Version";
import Weakness from "../../components/features/Weakness";
import { getTypeArray } from "../../utils/pokemonFormatters";
import { formatName, formatNumber } from "../../utils/pokemonFormatters";

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
      <article className={styles.detailsContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.titleName}>{formatName(pokemon.name)}</span>
          <span className={styles.titleId} aria-label={`Pokémon number ${formatNumber(pokemon.id)}`}>{formatNumber(pokemon.id)}</span>
        </div>
        <nav aria-label="Page navigation">
          <Pagination pokemonItem={pokemon} />
        </nav>
        <section className={styles.detailsMain} aria-labelledby="pokemon-details-main-content">
          <h2 id="pokemon-details-main-content" className="sr-only">Pokémon Information</h2>
          <section className={styles.visualSection} aria-labelledby="visuals-heading">
            <h3 id="visuals-heading" className="sr-only">Pokémon Visuals and Stats</h3>
            <figure aria-label={`${pokemon.name} official artwork`}>
              <img
                src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
                alt={`Official artwork of ${pokemon.name}`}
                className={styles.pokemonImage}
              />
            </figure>
            <Stats pokemonItem={pokemon} />
          </section>
          <section className={styles.infoSection} aria-labelledby="info-heading">
            <h3 id="info-heading" className="sr-only">Pokémon Info and Characteristics</h3>
            <Version blue={blue} red={red} />
            <Info pokemonItem={pokemon} />
          </section>
          <section className={styles.battleInfo} aria-labelledby="type-weakness-heading">
            <h3 id="type-weakness-heading" className="sr-only">Type and Weaknesses</h3>
            <div className={styles.typeSection}>
              <h3 className={styles.typeHeading}>Type</h3>
              <Types typesArray={typesArray} isLarge={true} />
            </div>
            <Weakness
              damageStuff1={damageStuff1}
              damageStuff2={damageStuff2}
              isLarge={true}
            />
          </section>
        </section>
        <section aria-labelledby="pokemon-evolution-chain">
          <h2 id="pokemon-evolution-chain" className="sr-only">Evolution Chain</h2>
          <Evolution pokemonItem={pokemon} />
        </section>
        <nav aria-label="Back to home">
          <Link to="/" className={styles.backToHomeLink}>
            Explore More Pokémon
          </Link>
        </nav>
      </article>
    </main>
  );
};

export default PokemonDetails; 