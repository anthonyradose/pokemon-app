import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber, getTypeArray } from "../../../utils/formatters";
import PokemonType from "../PokemonType/PokemonType";
import "../../../pages/PokemonDetails/PokemonDetails.css";
import "./EvolutionChart.css";

const EvolutionChart = ({ pokemonItem }) => {
  const typesArray = getTypeArray(pokemonItem.types);

  let navigate = useNavigate();
  const evolutions = pokemonItem?.evoListItems?.map((item) => (
    <button
      key={item.name}
      className="evolution-pokemon-card"
      onClick={() => navigate(`/${item.name}`)}
      type="button"
      aria-label={`View ${formatName(item.name)} details`}
    >
      <img
        className="evolution-pokemon-img"
        height={200}
        width={200}
        src={item.sprites?.other["official-artwork"]?.front_default}
        alt={`${formatName(item.name)} evolution`}
      />

      <span className="evolution-pokemon-header">
        <h3 className="evolution-pokemon-name">{formatName(item.name)}</h3>
        <h3 className="evolution-pokemon-number">{formatNumber(item.id)}</h3>
      </span>
      <PokemonType typesArray={typesArray} isLarge={false} />
    </button>
  ));

  return (
    <section className="evolution-section" role="region" aria-label="Evolution chain">
      <header className="evolution-section-header">
        <h2 className="evolution-title">Evolutions</h2>
      </header>
      {pokemonItem.evoListItems.length <= 1 ? (
        <p className="evolution-none">This Pokémon does not evolve</p>
      ) : null}
      <div className="evolution-content" role="group" aria-label="Evolution options">{evolutions}</div>
    </section>
  );
};

export default EvolutionChart;
