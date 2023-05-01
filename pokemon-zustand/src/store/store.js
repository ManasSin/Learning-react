import { create } from "zustand";

//TODO: we have to create - pokemon array, search, setSearch, setPokemon ( after filter and sort ) ,

const sortedPokemonList = (pokemon, search) =>
  pokemon
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 400)
    .sort((a, b) => a.name.localeCompare(b.name));

export const usePokemon = create((set, get) => ({
  pokemon: [],
  allPokemon: [],
  setPokemon: (pokemon) =>
    set({
      allPokemon: pokemon,
      pokemon: sortedPokemonList(pokemon, get().search),
    }),
  search: "",
  setSearch: (search) =>
    set({ search, pokemon: sortedPokemonList(get().allPokemon, search) }),
}));

fetch("/pokemon.json")
  .then((res) => res.json())
  .then((pokemon) => usePokemon.getState().setPokemon(pokemon));
