import { usePokemon } from "./context/store";
const SearchBox = () => {
  const { SetSearch, search } = usePokemon();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" sticky top-8 w-full h-max"
    >
      <input
        className="mt-3 block w-full rounded-md border border-gray-300 shadow-xl focus-within:border-slate-400 focus:outline-slate-400 sm:text-lg p-2"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => SetSearch(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default SearchBox;
