import { HYPHEN_NAMES, APOSTROPHE_NAMES, MR_NAMES, POKEMON_SUFFIX } from "../constants/pokemonNameRules";
import { NUMBER_FORMATS } from "../constants/numberFormatting";

export const formatName = (name) => {
  if (HYPHEN_NAMES.includes(name)) {
    return name;
  }
  if (APOSTROPHE_NAMES.includes(name)) {
    return name.slice(0, 8) + "'" + name.slice(8);
  }
  if (MR_NAMES.includes(name)) {
    return name.slice(0, 2) + ". " + name.slice(3);
  }
  return name?.split("-")[0];
};

export const formatNumber = (number) => {
  if (number < 10) {
    return `${NUMBER_FORMATS.SINGLE_DIGIT}${number}`;
  }
  if (number < 100) {
    return `${NUMBER_FORMATS.DOUBLE_DIGIT}${number}`;
  }
  return `${NUMBER_FORMATS.TRIPLE_DIGIT}${number}`;
};

export const getTypeArray = (typesArray) => {
  const typesStringsArray = typesArray.map((item) => item.type.name);
  return typesStringsArray;
}; 