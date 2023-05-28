import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/action/searchSlice";
import { pokemonApi } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
