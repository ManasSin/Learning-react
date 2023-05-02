import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pokemonApi = createApi({
  reducerPath: "PokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/", timeout: 10000 }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => "pokemon.json",
    }),
  }),
});

export const usePokeminQuery = pokemonApi.endpoints.getPokemons.useQuery;

export { pokemonApi };
