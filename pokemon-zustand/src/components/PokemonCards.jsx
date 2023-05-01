import { usePokemon } from "../store/store";

export const PokemonCards = () => {
  const pokemon = usePokemon((state) => state.pokemon);
  return (
    <>
      <ul className="nothing grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
        {pokemon.map((p) => (
          //   <li to={`/pokemon/${p.id}`} key={p.id}>
          <li
            key={p.id}
            className="col-span-1 flex flex-col text-center bg-white
              rounded-lg shadow-lg p-8 hover:shadow-xl"
          >
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt=""
            />
            <p className="mt-6 text-gray-900 text-sm font-medium">{p.name}</p>
          </li>
          //   </li>
        ))}
      </ul>
    </>
  );
};
