import { PokemonCards } from "./PokemonCards";
import { SearchBox } from "./SearchBox";

export const Pokemon = () => {
  return (
    <section className=" max-w-6xl m-auto p-8">
      <SearchBox />
      <PokemonCards />
    </section>
  );
};
