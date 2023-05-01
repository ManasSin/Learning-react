import { usePokemon } from "../store/store";

export const SearchBox = () => {
  const search = usePokemon((state) => state.search);
  const setSearch = usePokemon((state) => state.setSearch);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" sticky top-8 w-full h-max"
    >
      <input
        className="mt-3 block w-full rounded-md border border-gray-300 shadow-xl focus-within:border-slate-400 focus:outline-slate-400 sm:text-lg p-2"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search pokemons"
        autoFocus
      />
    </form>
  );
};
