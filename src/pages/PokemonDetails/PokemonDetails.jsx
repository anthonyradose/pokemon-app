import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PokemonDetails.module.css";
import PokeballLoader from "../../components/common/PokeballLoader";
import PokemonTitle from "../../components/features/PokemonTitle";
import PokemonTypeBadge from "../../components/features/PokemonTypeBadge";
import PokemonPagination from "../../components/common/PokemonPagination";
import PokemonStats from "../../components/features/PokemonStats";
import PokemonImage from "../../components/features/PokemonImage";
import PokemonInfo from "../../components/features/PokemonInfo";
import EvolutionChain from "../../components/features/EvolutionChain";
import GameVersionToggle from "../../components/features/GameVersionToggle";
import WeaknessDisplay from "../../components/features/WeaknessDisplay";
import { getTypeArray } from "../../utils/pokemonFormatters";
import BackToHome from "../../components/common/BackToHome";
import usePokemonDetails from "../../hooks/usePokemonDetails";

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemon, loading, pageLoaded } = usePokemonDetails(name);

  if (loading && !pageLoaded) {
    return (
      <div className="loading-screen">
        <PokeballLoader />
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
      <PokemonPagination pokemonItem={pokemon} />
      
      <PokemonTitle pokemonItem={pokemon} />

      <div className={styles.detailsLayout}>
        <article className={styles.detailsContainer}>
          <section className={styles.detailsMain} aria-labelledby="pokemon-details-main-content">
            <h2 id="pokemon-details-main-content" className="sr-only">Pokémon Information</h2>
            
            <div className={styles.visualSection} role="complementary" aria-label="Pokémon visual information">
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
            
            <div className={styles.infoSection} role="complementary" aria-label="Pokémon details and characteristics">
              <section className={styles.metaSection} aria-labelledby="pokemon-details-versions-info">
                <h3 id="pokemon-details-versions-info" className="sr-only">Versions and Information</h3>
                <GameVersionToggle blue={blue} red={red} />
                <PokemonInfo pokemonItem={pokemon} />
              </section>
              
              <section className={styles.battleInfo} aria-labelledby="pokemon-details-type-weaknesses">
                <h3 id="pokemon-details-type-weaknesses" className="sr-only">Type and Weaknesses</h3>
                <div className={styles.typeSection}>
                  <h4 className={styles.typeHeading}>Type</h4>
                  <PokemonTypeBadge typesArray={typesArray} isLarge={true} />
                </div>
                <WeaknessDisplay
                  damageStuff1={damageStuff1}
                  damageStuff2={damageStuff2}
                  isLarge={true}
                />
              </section>
            </div>
          </section>

          <section aria-labelledby="pokemon-evolution-chain">
            <h2 id="pokemon-evolution-chain" className="sr-only">Evolution Chain</h2>
            <EvolutionChain pokemonItem={pokemon} />
          </section>
          
          <BackToHome />
        </article>
      </div>
    </main>
  );
};

export default PokemonDetails; 