import styles from "./Stats.module.css";
import React from "react";
import { STAT_BAR_MAX } from "../../../constants/pokemonConfig";
import { COLORS } from "../../../constants/uiColors";

const StatBar = ({ numOfBarsColored, statName }) => {
  const numThing = numOfBarsColored;
  const statsLabel = statName;
  const lisArray = Array.from(new Array(STAT_BAR_MAX));
  const liMapped = lisArray.map((a, i) => {
    const changeColor = i < numThing ? COLORS.STAT_BAR_ACTIVE : COLORS.STAT_BAR_INACTIVE;
    return <li key={i} className={styles.statBarSegment} style={{ backgroundColor: changeColor }} />;
  });
  return (
    <div>
      <ul className={styles.statBar} role="progressbar" aria-label={`${statsLabel} stat bar`} aria-valuenow={numThing} aria-valuemin="0" aria-valuemax={STAT_BAR_MAX}>{liMapped}</ul>
      {statsLabel}
    </div>
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
    const statName =
      stats.stat.name.charAt(0) +
      stats.stat.name.slice(1, 8).replace("-", " ") +
      stats.stat.name.charAt(8) +
      stats.stat.name.slice(9);
    return <span key={index} className={styles.statLabel}>{statName}</span>;
  });
  return (
    <div className={styles.statsWrapper}>
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
    </div>
  );
};

export default Stats;
