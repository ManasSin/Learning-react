import { Pokemon } from "../components/PokemonPage";

export const Routes = [
  {
    path: "/",
    element: <Pokemon />,
  },
  {
    path: "/pokemon/:id",
  },
];
