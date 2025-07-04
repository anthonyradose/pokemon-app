import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber } from "../../../utils/pokemonFormatters";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styles from "./PokemonPagination.module.css";

const PokemonPagination = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const previous = formatName(pokemonItem?.prevPokemon?.name);
  const next = formatName(pokemonItem?.nextPokemon?.name);
  const prevId = formatNumber(pokemonItem.prevPokemon.id);
  const nextId = formatNumber(pokemonItem.nextPokemon.id);

  return (
    <nav className={styles.pagination} role="navigation" aria-label="Pokémon navigation">
      <div className={styles.paginationContainer}>
        <div className={styles.paginationControls}>
          <button
            className={styles.paginationPrev}
            onClick={() => navigate(`/${pokemonItem.prevPokemon.name}`)}
            type="button"
            aria-label={`Go to previous Pokémon: ${previous}`}
          >
            <div className={styles.paginationPrevContent}>
              <div className={styles.paginationPrevDetails}>
                <ArrowCircleLeftIcon aria-hidden="true"></ArrowCircleLeftIcon>
                <span className={styles.paginationNumber}>{prevId}</span>
                <span className={styles.paginationName}>{previous}</span>
              </div>
            </div>
          </button>

          <button
            className={styles.paginationNext}
            onClick={() => navigate(`/${pokemonItem.nextPokemon.name}`)}
            type="button"
            aria-label={`Go to next Pokémon: ${next}`}
          >
            <div className={styles.paginationNextContent}>
              <div className={styles.paginationNextDetails}>
                <span className={styles.paginationName}>{next}</span>
                <span className={styles.paginationNumber}>{nextId}</span>
                <ArrowCircleRightIcon aria-hidden="true"></ArrowCircleRightIcon>
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PokemonPagination;
