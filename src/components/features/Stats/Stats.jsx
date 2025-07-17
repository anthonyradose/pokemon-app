import styles from "./Stats.module.css";
import React from "react";
import { appLimits } from "../../../constants/appLimits";
import { formatStatName } from "../../../utils/pokemonFormatters";

const StatBar = ({ numOfBarsColored, statName }) => {
  const numThing = numOfBarsColored;
  const statsLabel = statName;
  const lisArray = Array.from(new Array(appLimits.statBarMax));
  const liMapped = lisArray.map((a, i) => {
    const changeColor = i < numThing ? "#4CAF50" : "#E0E0E0";
    return <li key={i} className={styles.statBarSegment} style={{ backgroundColor: changeColor }} />;
  });
  return (
    <>
      <ul className={styles.statBar} role="progressbar" aria-label={`${statsLabel} stat bar`} aria-valuenow={numThing} aria-valuemin="0" aria-valuemax={appLimits.statBarMax}>{liMapped}</ul>
      {statsLabel}
    </>
  );
};

const Stats = ({ pokemonItem }) => {
  const statsArray = pokemonItem.stats;
  const numsArray = [];
  for (let i = 0; i < statsArray.length; i++) {
    const newObj = statsArray[i];
    const nums = newObj.base_stat;
    numsArray.push(Math.round(nums / 17));
  }
  const statsMapped = statsArray.map((stats, index) => {
    const statName = formatStatName(stats.stat.name);
    return <span key={index} className={styles.statLabel}>{statName}</span>;
  });
  return (
   
      <div className={styles.statsContent}>
        <h3 className={styles.statsHeader}>Stats</h3>
        <div className={styles.statsContainer}>
          <ul className={styles.statsList}>
            {numsArray.map((num, index) => {
              return (
                <li key={index} className={styles.statItem}>
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
 
  );
};

export default Stats;
