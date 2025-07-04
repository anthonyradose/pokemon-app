import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber, getTypeArray } from "../../../utils/pokemonFormatters";
import PokemonTypeBadge from "../PokemonTypeBadge/PokemonTypeBadge";
import styles from "./EvolutionChain.module.css";

const EvolutionChain = ({ pokemonItem }) => {
  const typesArray = getTypeArray(pokemonItem.types);

  let navigate = useNavigate();
  const evolutions = pokemonItem?.evoListItems?.map((item) => (
    <button
      key={item.name}
      className={styles.evolutionCard}
      onClick={() => navigate(`/${item.name}`)}
      type="button"
      aria-label={`View ${formatName(item.name)} details`}
    >
      <img
        className={styles.evolutionImg}
        height={200}
        width={200}
        src={item.sprites?.other["official-artwork"]?.front_default}
        alt={`${formatName(item.name)} evolution`}
      />

      <span className={styles.evolutionHeader}>
        <h3 className={styles.evolutionName}>{formatName(item.name)}</h3>
        <h3 className={styles.evolutionNumber}>{formatNumber(item.id)}</h3>
      </span>
      <PokemonTypeBadge typesArray={typesArray} isLarge={false} />
    </button>
  ));

  return (
    <section className={styles.evolutionSection} role="region" aria-label="Evolution chain">
      <header className={styles.evolutionSectionHeader}>
        <h2 className={styles.evolutionTitle}>Evolutions</h2>
      </header>
      {pokemonItem.evoListItems.length <= 1 ? (
        <p className={styles.evolutionNone}>This Pokémon does not evolve</p>
      ) : null}
      <div className={styles.evolutionContent} role="group" aria-label="Evolution options">{evolutions}</div>
    </section>
  );
};

export default EvolutionChain;
