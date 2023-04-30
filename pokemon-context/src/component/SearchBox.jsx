import { usePokemon } from "../context/store";
const SearchBox = () => {
  const { SetSearch, search } = usePokemon();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="mt-3 block w-full rounded-md border border-gray-300 shadow-xl focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2 fixed top-3"
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
