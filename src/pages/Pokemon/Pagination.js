import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber } from "../../utils";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "./pokemon.css";

const Pagination = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const previous = formatName(pokemonItem?.prevPokemon?.name);
  const next = formatName(pokemonItem?.nextPokemon?.name);
  const prevId = formatNumber(pokemonItem.prevPokemon.id)
  const nextId = formatNumber(pokemonItem.nextPokemon.id)

  return (
    <section className=" pagination section pokedex-pokemon-header">
      <div className="pokedex-pokemon-pagination">
        <div className="pagination-container">
        <div className="previous-container"    onClick={() => navigate(`/${pokemonItem.prevPokemon.name}`)}
>
        <div
          className="previous"
        >
          <div className="left">
          <ArrowCircleLeftIcon></ArrowCircleLeftIcon>
            <span className="pokemon-pagination-number">{prevId}</span>
            <span className="pokemon-pagination-name">{previous}</span>
          </div>
        </div>
        </div>

        <div className="next-container" onClick={() => navigate(`/${pokemonItem.nextPokemon.name}`)}>
        <div
          className="next"
          onClick={() => navigate(`/${pokemonItem.nextPokemon.name}`)}
        >
          <div className="right">
            
            <span className="pokemon-pagination-name">{next}</span>
            <span className="pokemon-pagination-number">{nextId}</span>
            <ArrowCircleRightIcon></ArrowCircleRightIcon>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
