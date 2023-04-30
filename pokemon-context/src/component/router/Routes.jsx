import Pokemon from "../Pokemon";
import PokemonDetail from "../PokemonDetail";

const Routes = [
  {
    path: "/",
    element: (
      <>
        <Pokemon />
      </>
    ),
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetail />,
    // children: [{ path: ":id", element: <PokemonDetail /> }],
  },
];

export default Routes;
