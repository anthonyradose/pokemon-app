import { nameRules } from "../constants/nameRules";
import { digitFormats } from "../constants/displayFormats";

export const formatName = (name) => {
  if (nameRules.hyphen.includes(name)) {
    return name;
  }
  if (nameRules.apostrophe.includes(name)) {
    return name.slice(0, 8) + "'" + name.slice(8);
  }
  if (nameRules.mr.includes(name)) {
    return name.slice(0, 2) + ". " + name.slice(3);
  }
  return name?.split("-")[0];
};

export const formatNumber = (number) => {
  if (number < 10) {
    return `${digitFormats.singleDigit}${number}`;
  }
  if (number < 100) {
    return `${digitFormats.doubleDigit}${number}`;
  }
  return `${digitFormats.tripleDigit}${number}`;
};

export const formatStatName = (statName) => {
  // Replicates the formatting logic from Stats.jsx
  return (
    statName.charAt(0) +
    statName.slice(1, 8).replace("-", " ") +
    statName.charAt(8) +
    statName.slice(9)
  );
};

export const getTypeArray = (typesArray) => {
  const typesStringsArray = typesArray.map((item) => item.type.name);
  return typesStringsArray;
}; 