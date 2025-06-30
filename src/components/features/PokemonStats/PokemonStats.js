import "./PokemonStats.css";
import "../../../pages/PokemonDetails/PokemonDetails.css";
import React from "react";
import { STAT_BAR_MAX } from "../../../constants/pokemon";
import { COLORS } from "../../../constants/uiColors";

const StatBar = ({ numOfBarsColored, statName }) => {
  const numThing = numOfBarsColored;
  const statsLabel = statName;
  const lisArray = Array.from(new Array(STAT_BAR_MAX));
  const liMapped = lisArray.map((a, i) => {
    const changeColor = i < numThing ? COLORS.STAT_BAR_ACTIVE : COLORS.STAT_BAR_INACTIVE;
    return <li key={i} className="stat-bar-segment" style={{ backgroundColor: changeColor }} />;
  });
  return (
    <div>
      <ul className="stat-bar">{liMapped}</ul>
      {statsLabel}
    </div>
  );
};

const PokemonStats = ({ pokemonItem }) => {
  const statsArray = pokemonItem.stats;
  const numsArray = [];
  for (let i = 0; i < statsArray.length; i++) {
    const newObj = statsArray[i];
    const nums = newObj.base_stat;
    numsArray.push(Math.round(nums / 17));
  }
  const statsMapped = statsArray.map((stats, index) => {
    const statName =
      stats.stat.name.charAt(0) +
      stats.stat.name.slice(1, 8).replace("-", " ") +
      stats.stat.name.charAt(8) +
      stats.stat.name.slice(9);
    return <span key={index} className="stat-label">{statName}</span>;
  });
  return (
    <div className="stats-wrapper">
      <div className="stats-div">
        <h3 className="stats-header">Stats</h3>
        <div className="stats-container">
          <ul className="stats-list">
            {numsArray.map((num, index) => {
              return (
                <li key={index} className="stat-item">
                  <StatBar
                    numOfBarsColored={num}
                    statName={statsMapped[index]}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
