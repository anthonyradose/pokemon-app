import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import Pokeball from "../../components/Pokeball/Pokeball";
import Heading from "./Heading";
import Type from "../../components/Type/Type";
import Pagination from "./Pagination";
import Stats from "./Stats";
import Image from "./Image";
import Info from "./Info";
import Evolution from "./Evolution";
import Versions from "./Versions";
import Weakness from "./Weakness";
import { getTypeArray } from "../../utils";
import Explore from "./Explore";

const P = new Pokedex();

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getPokemonDetails = async (name) => {
    setLoading(true);
  
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
      item.id === 1 ? 898 : item.id - 1
    );
    item.nextPokemon = await P.getPokemonByName(
      item.id === 898 ? 1 : item.id + 1
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

    setPokemon(item);
    setPageLoaded(true)
    setLoading(false);

  };

  useEffect(() => {
    if (name) {
      getPokemonDetails(name);
    }
  }, [name]);

  if (loading && !pageLoaded) {
    return <Pokeball />;
  }

  if (!pokemon) {
    return null;
  }

  let blue = pokemon?.spec?.flavor_text_entries?.[0]?.flavor_text;
  let red = pokemon?.spec?.flavor_text_entries?.[3]?.flavor_text;
  let damageStuff1 = pokemon?.damageStuff1;
  let damageStuff2 = pokemon?.damageStuff2;

  const typesArray = getTypeArray(pokemon.types);

  return (
    <div className="pokemon-page">
      <Pagination pokemonItem={pokemon} />
      <Heading pokemonItem={pokemon} />

      <div className="pokemon-container-div">
        <div className="pokemon-container">
          <div className="main-contents">
            <div className="left-column">
              <Image
                src={
                  pokemon.sprites?.other?.["official-artwork"]?.front_default
                }
              />
              <Stats pokemonItem={pokemon} />
            </div>
            <div className="right-column">
              <div className="versions-and-info-container">
                <Versions blue={blue} red={red} />
                <Info pokemonItem={pokemon} />
              </div>
              <div className="type-and-weaknesses-container">
                <div className="type-div">
                  <h3 className="type-h3">Type</h3>
                  <Type typesArray={typesArray} isLarge={true} />
                </div>
                <Weakness
                  damageStuff1={damageStuff1}
                  damageStuff2={damageStuff2}
                  isLarge={true}
                />
              </div>
            </div>
          </div>

          <Evolution pokemonItem={pokemon} />
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
