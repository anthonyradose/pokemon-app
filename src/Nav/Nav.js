import React from "react";
import "./Nav.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import GamepadIcon from '@mui/icons-material/Gamepad';
import StyleIcon from '@mui/icons-material/Style';
import TvIcon from '@mui/icons-material/Tv';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FeedIcon from '@mui/icons-material/Feed';

const Nav = () => {
  return (
    <nav className="main">
      <div className="content-wrapper">
        <div className="nav-div" id="home-tab">
          <img
            className="home-tab-img"
            src="https://icon-library.com/images/pikachu-icon/pikachu-icon-14.jpg"
          ></img>
          <a className="nav-link">
            <div>Home</div>
          </a>
        </div>
        <div className="nav-div" id="pokedex-tab">
          <CatchingPokemonIcon className="pokedex-tab-icon">
          </CatchingPokemonIcon>
          <a className="nav-link">
            <div>Pokédex</div>
          </a>
        </div>
        <div className="nav-div" id="games-tab">
          <GamepadIcon className="games-tab-icon"></GamepadIcon>
          <a
            className="nav-link"
            href="https://www.pokemon.com/uk/pokemon-video-games/"
          >
            <div>Video Games & Apps</div>
          </a>
        </div>
        <div className="nav-div" id="trading-tab">
        <StyleIcon className="trading-tab-icon"></StyleIcon>
          <a
            className="nav-link"
            href="https://www.pokemon.com/uk/pokemon-tcg/"
          >
            <div>Trading Card Game</div>
          </a>
        </div>
        <div className="nav-div" id="tv-tab">
          <TvIcon className="tv-tab-icon"></TvIcon>
          <a
            className="nav-link"
            href="https://www.pokemon.com/uk/pokemon-episodes/"
          >
            <div>Pokémon TV</div>
          </a>
        </div>
        <div className="nav-div" id="play-tab">
          <EmojiEventsIcon className="play-tab-icon"></EmojiEventsIcon>
          <a
            className="nav-link"
            href="https://www.pokemon.com/uk/play-pokemon/"
          >
            <div>Play! Pokémon Events</div>
          </a>
        </div>
        <div className="nav-div" id="news-tab">
          <FeedIcon className="news-tab-icon"></FeedIcon>
          <a
            className="nav-link"
            href="https://www.pokemon.com/uk/pokemon-news/"
          >
            <div>News</div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
