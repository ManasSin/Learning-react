import { createContext } from "react";
import { pokemonApi } from "../api/apiSlice";
import { store } from "../../app/Store";

store.dispatch(pokemonApi.endpoints.getPokemons.initiate(undefined));

export const sortedList = createContext(
  (state) => pokemonApi.endpoints.getPokemons.select(undefined)(state)?.data,
  (state) => state.search.search,
  (pokemon, search) =>
    (pokemon || [])
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 100)
      .sort((a, b) => a.name.localeCompare(b.name))
);

console.log(sortedList);
