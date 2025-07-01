import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber } from "../../../utils/formatters";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styles from "./Pagination.module.css";

const Pagination = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const previous = formatName(pokemonItem?.prevPokemon?.name);
  const next = formatName(pokemonItem?.nextPokemon?.name);
  const prevId = formatNumber(pokemonItem.prevPokemon.id);
  const nextId = formatNumber(pokemonItem.nextPokemon.id);

  return (
    <nav className={`${styles.pagination} ${styles.pokedexPokemonHeader}`} role="navigation" aria-label="Pokémon navigation">
      <div className={styles.pokedexPokemonPagination}>
        <div className={styles.pokemonPaginationControls}>
          <button
            className={styles.pokemonPaginationPrev}
            onClick={() => navigate(`/${pokemonItem.prevPokemon.name}`)}
            type="button"
            aria-label={`Go to previous Pokémon: ${previous}`}
          >
            <div className={styles.pokemonPaginationPrevContent}>
              <div className={styles.pokemonPaginationPrevDetails}>
                <ArrowCircleLeftIcon aria-hidden="true"></ArrowCircleLeftIcon>
                <span className={styles.pokemonPaginationNumber}>{prevId}</span>
                <span className={styles.pokemonPaginationName}>{previous}</span>
              </div>
            </div>
          </button>

          <button
            className={styles.pokemonPaginationNext}
            onClick={() => navigate(`/${pokemonItem.nextPokemon.name}`)}
            type="button"
            aria-label={`Go to next Pokémon: ${next}`}
          >
            <div className={styles.pokemonPaginationNextContent}>
              <div className={styles.pokemonPaginationNextDetails}>
                <span className={styles.pokemonPaginationName}>{next}</span>
                <span className={styles.pokemonPaginationNumber}>{nextId}</span>
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
