import { useContext, useEffect, useReducer, useCallback, useMemo } from "react";
import PokemonContext from "./PokemonContext";
import { useQuery } from "react-query";

export function PokemonFetch() {
  const [{ search }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        // case "ADD_POKEMON":
        //   return { ...state, pokemon: action.payload };
        case "SET_SEARCH":
          return { ...state, search: action.payload };
      }
    },
    {
      // pokemon: [],
      search: "",
    }
  );

  const { data: pokemon } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () =>
      fetch("/pokemon.json").then((response) => {
        return response.json();
      }),
    initialData: [],
  });

  // useEffect(() => {
  //   fetch("/pokemon.json")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       dispatch({
  //         type: "ADD_POKEMON",
  //         payload: data,
  //       })
  //     )
  //     .catch((error) => {
  //       console.error("the error is: ", error);
  //     });
  // }, []);

  const SetSearch = useCallback((search) => {
    dispatch({
      type: "SET_SEARCH",
      payload: search,
    });
  }, []);

  const filteredPokemon = useMemo(
    () =>
      pokemon
        ?.slice(0, 400)
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase())),
    [pokemon, search]
  );

  const sortedPokemon = useMemo(
    () =>
      filteredPokemon
        ? [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name))
        : null,
    [filteredPokemon]
  );

  return { pokemon: sortedPokemon, SetSearch, search };
}

export function usePokemon() {
  return useContext(PokemonContext);
}
