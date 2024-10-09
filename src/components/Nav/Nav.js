import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import GamepadIcon from "@mui/icons-material/Gamepad";
import StyleIcon from "@mui/icons-material/Style";
import TvIcon from "@mui/icons-material/Tv";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FeedIcon from "@mui/icons-material/Feed";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState("nav-tab-img");
  const [Navs, setNavs] = useState("nav-div");
  const [grey, setGrey] = useState("home-tab");
  const [blue, setBlue] = useState("news-tab");
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navbarControl = () => {
    if (window.scrollY > 35) {
      setShow("nav-tab-img-none");
      setNavs("nav-div-2point0");
      setGrey("home-tab-2point0");
      setBlue("news-tab-2point0");
    } else {
      setShow("nav-tab-img");
      setNavs("nav-div");
      setGrey("home-tab");
      setBlue("news-tab");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarControl);
    return () => window.removeEventListener("scroll", navbarControl);
  }, []);

  return (
    <nav className="main">
      <div className="phantom-div">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <MenuIcon className="menu-icon"></MenuIcon>
        </button>

        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="nav-div" id={grey} onClick={() => navigate(`/`)}>
            <img
              className={show}
              src="https://icon-library.com/images/pikachu-icon/pikachu-icon-14.jpg"
            ></img>
            <a className="nav-link">
              <div className="nav-link-label" href="/pokemon-app/">
                Home
              </div>
            </a>
          </div>
          <div className={Navs} id="pokedex-tab" onClick={() => navigate(`/`)}>
            <CatchingPokemonIcon className={show}></CatchingPokemonIcon>
            <a className="nav-link">
              <div className="nav-link-label">Pokédex</div>
            </a>
          </div>
          <div className={Navs} id="games-tab">
            <GamepadIcon className={show}></GamepadIcon>
            <a
              className="nav-link"
              href="https://www.pokemon.com/uk/pokemon-video-games/"
            >
              <div className="nav-link-label">Video Games & Apps</div>
            </a>
          </div>
          <div className={Navs} id="trading-tab">
            <StyleIcon className={show}></StyleIcon>
            <a
              className="nav-link"
              href="https://www.pokemon.com/uk/pokemon-tcg/"
            >
              <div className="nav-link-label">Trading Card Game</div>
            </a>
          </div>
          <div className={Navs} id="tv-tab">
            <TvIcon className={show}></TvIcon>
            <a
              className="nav-link"
              href="https://www.pokemon.com/uk/pokemon-episodes/"
            >
              <div className="nav-link-label">Pokémon TV</div>
            </a>
          </div>
          <div className={Navs} id="play-tab">
            <EmojiEventsIcon className={show}></EmojiEventsIcon>
            <a
              className="nav-link"
              href="https://www.pokemon.com/uk/play-pokemon/"
            >
              <div className="nav-link-label">Play! Pokémon Events</div>
            </a>
          </div>
          <div className="nav-div" id={blue}>
            <FeedIcon className={show}></FeedIcon>
            <a
              className="nav-link"
              href="https://www.pokemon.com/uk/pokemon-news/"
            >
              <div className="nav-link-label">News</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
