import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber } from "../../../utils/formatters";
import "../../../pages/PokemonDetails/PokemonDetails.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import './Pagination.css';

const Pagination = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const previous = formatName(pokemonItem?.prevPokemon?.name);
  const next = formatName(pokemonItem?.nextPokemon?.name);
  const prevId = formatNumber(pokemonItem.prevPokemon.id);
  const nextId = formatNumber(pokemonItem.nextPokemon.id);

  return (
    <nav className="pagination section pokedex-pokemon-header" role="navigation" aria-label="Pokémon navigation">
      <div className="pokedex-pokemon-pagination">
        <div className="pokemon-pagination-controls">
          <button
            className="pokemon-pagination-prev"
            onClick={() => navigate(`/${pokemonItem.prevPokemon.name}`)}
            type="button"
            aria-label={`Go to previous Pokémon: ${previous}`}
          >
            <div className="pokemon-pagination-prev-content">
              <div className="pokemon-pagination-prev-details">
                <ArrowCircleLeftIcon aria-hidden="true"></ArrowCircleLeftIcon>
                <span className="pokemon-pagination-number">{prevId}</span>
                <span className="pokemon-pagination-name">{previous}</span>
              </div>
            </div>
          </button>

          <button
            className="pokemon-pagination-next"
            onClick={() => navigate(`/${pokemonItem.nextPokemon.name}`)}
            type="button"
            aria-label={`Go to next Pokémon: ${next}`}
          >
            <div className="pokemon-pagination-next-content">
              <div className="pokemon-pagination-next-details">
                <span className="pokemon-pagination-name">{next}</span>
                <span className="pokemon-pagination-number">{nextId}</span>
                <ArrowCircleRightIcon aria-hidden="true"></ArrowCircleRightIcon>
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
