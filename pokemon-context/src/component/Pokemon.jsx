import { usePokemon } from "./context/store";
import PokemonItem from "./PokemonItem";
import SearchBox from "./SearchBox";

const Pokemon = () => {
  const { pokemon } = usePokemon();
  return (
    <section className=" max-w-6xl m-auto p-8">
      <SearchBox />
      <PokemonItem pokemons={pokemon} />
    </section>
  );
};

export default Pokemon;
