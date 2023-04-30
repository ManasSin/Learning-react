import { useContext } from "react";
import PokemonContext from "./PokemonContext";

export function usePokemon() {
  const { pokemon, setSearch, search } = useContext(PokemonContext);

  const filteredPokemon = useMemo(() =>
    pokemon[0]?.filter(
      (p) => p.name.toLowerCase().includes(search.toLowerCase()),
      [pokemon, search]
    )
  );

  console.log(filteredPokemon);

  const sortedPokemon = useMemo(
    () =>
      filteredPokemon
        ? [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name))
        : null,
    [filteredPokemon]
  );

  return { pokemon: sortedPokemon, setSearch, search };
}
