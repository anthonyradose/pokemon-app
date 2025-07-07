import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber } from "../../../utils/pokemonFormatters";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styles from "./Pagination.module.css";

const Pagination = ({ pokemonItem }) => {
  const navigate = useNavigate();
  const previousPokemonName = formatName(pokemonItem?.prevPokemon?.name);
  const nextPokemonName = formatName(pokemonItem?.nextPokemon?.name);
  const previousPokemonId = formatNumber(pokemonItem.prevPokemon.id);
  const nextPokemonId = formatNumber(pokemonItem.nextPokemon.id);

  return (
    <nav className={styles.pagination} role="navigation" aria-label="Pokémon navigation">
      <button
        className={styles.paginationPrev}
        onClick={() => navigate(`/${pokemonItem.prevPokemon.name}`)}
        type="button"
        aria-label={`Go to previous Pokémon: ${previousPokemonName}`}
      >
        <ArrowCircleLeftIcon aria-hidden="true" />
        <span className={styles.paginationNumber}>{previousPokemonId}</span>
        <span className={styles.paginationName}>{previousPokemonName}</span>
      </button>

      <button
        className={styles.paginationNext}
        onClick={() => navigate(`/${pokemonItem.nextPokemon.name}`)}
        type="button"
        aria-label={`Go to next Pokémon: ${nextPokemonName}`}
      >
        <span className={styles.paginationName}>{nextPokemonName}</span>
        <span className={styles.paginationNumber}>{nextPokemonId}</span>
        <ArrowCircleRightIcon aria-hidden="true" />
      </button>
    </nav>
  );
};

export default Pagination;
