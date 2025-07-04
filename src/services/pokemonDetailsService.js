import P from "./pokedexClient";
import { TOTAL_POKEMON } from "../constants/pokemonConfig";

const getDetailedPokemonDetails = async (name) => {
  const item = await P.getPokemonByName(name);
  item.spec = await P.getPokemonSpeciesByName(name);
  const cat = await fetch(item.species.url);
  const catSpec = await cat.json();
  item.category = catSpec?.genera[7]?.genus;

  const typeInfo1 = await fetch(item.types[0].type.url);
  const typeInfoJSON1 = await typeInfo1.json();
  item.damageStuff1 = typeInfoJSON1.damage_relations;
  if (item.types.length > 0) {
    try {
      const typeInfo2 = await fetch(item.types[1].type.url);
      const typeInfoJSON2 = await typeInfo2.json();
      item.damageStuff2 = typeInfoJSON2.damage_relations;
    } catch (e) {
      console.log(e);
    }
  }

  // await way with while loop:
  const evoChainUrl = item.spec.evolution_chain.url;
  const evo = await fetch(evoChainUrl);
  const evoObj = await evo.json();

  const evoListNames = [];
  let evolves = evoObj.chain;
  while (evolves) {
    evoListNames.push(evolves.species.name);
    evolves = evolves.evolves_to[0];
  }

  let evoListItems = await Promise.all(
    evoListNames.map(async (name) => {
      const item = await P.getPokemonByName(name);
      return item;
    })
  );

  item.evoListItems = evoListItems;

  item.prevPokemon = await P.getPokemonByName(
    item.id === 1 ? TOTAL_POKEMON : item.id - 1
  );
  item.nextPokemon = await P.getPokemonByName(
    item.id === TOTAL_POKEMON ? 1 : item.id + 1
  );

  const item1 = await P.getGenderByName("male");
  const item2 = await P.getGenderByName("female");

  item.canBeMale =
    item1?.pokemon_species_details.find(
      (pokemon) => pokemon?.pokemon_species?.name === item.name
    ) !== undefined;

  item.canBeFemale =
    item2?.pokemon_species_details.find(
      (pokemon) => pokemon?.pokemon_species?.name === item.name
    ) !== undefined;

  item.unknown = !item.canBeMale && !item.canBeFemale;

  return item;
};

export {
  getDetailedPokemonDetails,
}; 