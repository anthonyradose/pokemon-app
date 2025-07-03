import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber, getTypeArray } from "../../../utils/formatters";
import PokemonType from "../PokemonType/PokemonType";
import styles from "./EvolutionChart.module.css";

const EvolutionChart = ({ pokemonItem }) => {
  const typesArray = getTypeArray(pokemonItem.types);

  let navigate = useNavigate();
  const evolutions = pokemonItem?.evoListItems?.map((item) => (
    <button
      key={item.name}
      className={styles.evolutionPokemonCard}
      onClick={() => navigate(`/${item.name}`)}
      type="button"
      aria-label={`View ${formatName(item.name)} details`}
    >
      <img
        className={styles.evolutionPokemonImg}
        height={200}
        width={200}
        src={item.sprites?.other["official-artwork"]?.front_default}
        alt={`${formatName(item.name)} evolution`}
      />

      <span className={styles.evolutionPokemonHeader}>
        <h3 className={styles.evolutionPokemonName}>{formatName(item.name)}</h3>
        <h3 className={styles.evolutionPokemonNumber}>{formatNumber(item.id)}</h3>
      </span>
      <PokemonType typesArray={typesArray} isLarge={false} />
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

export default EvolutionChart;
