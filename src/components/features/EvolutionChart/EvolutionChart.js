import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber, getTypeArray } from "../../../utils/formatters";
import PokemonType from "../PokemonType/PokemonType";
import "../../../pages/PokemonDetails/PokemonDetails.css";

const EvolutionChart = ({ pokemonItem }) => {
  const typesArray = getTypeArray(pokemonItem.types);

  let navigate = useNavigate();
  const evolutions = pokemonItem?.evoListItems?.map((item) => (
    <button
      key={item.name}
      className="evolution-pokemon-div"
      onClick={() => navigate(`/${item.name}`)}
      type="button"
      aria-label={`View ${formatName(item.name)} details`}
    >
      <img
        className="evolution-img"
        height={200}
        width={200}
        src={item.sprites?.other["official-artwork"]?.front_default}
        alt={`${formatName(item.name)} evolution`}
      />

      <span className="evolution-span-1">
        <h3 className="evolution-h3-1">{formatName(item.name)}</h3>
        <h3 className="evolution-h3-2">{formatNumber(item.id)}</h3>
      </span>
      <PokemonType typesArray={typesArray} isLarge={false} />
    </button>
  ));

  return (
    <section className="evolution-wrapper" role="region" aria-label="Evolution chain">
      <header className="evolution-span-2">
        <h2 className="evolution-h2">Evolutions</h2>
      </header>
      {pokemonItem.evoListItems.length <= 1 ? (
        <p className="evolution-no-evolution">This Pokémon does not evolve</p>
      ) : null}
      <div className="evolution-content-div" role="group" aria-label="Evolution options">{evolutions}</div>
    </section>
  );
};

export default EvolutionChart;
