import React from "react";
import { useParams } from "react-router-dom";
import Pokeball from "../../components/Pokeball/Pokeball";
import Heading from "../../components/Heading/Heading";
import Type from "../../components/Type/Type";
import Pagination from "../../components/Pagination/Pagination";
import Stats from "../../components/Stats/Stats";
import Image from "../../components/Image/Image";
import Info from "../../components/Info/Info";
import Evolution from "../../components/Evolution/Evolution";
import Versions from "../../components/Versions/Versions";
import Weakness from "../../components/Weakness/Weakness";
import { getTypeArray } from "../../utils/utils";
import Explore from "../../components/Explore/Explore";
import usePokemonDetails from "../../hooks/usePokemonDetails";

const Pokemon = () => {
  const { name } = useParams();
  const { pokemon, loading, pageLoaded } = usePokemonDetails(name);

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
