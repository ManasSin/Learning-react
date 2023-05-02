import { setSearch } from "../features/action/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" sticky top-8 w-full h-max"
    >
      <input
        className="mt-3 block w-full rounded-md border border-gray-300 shadow-xl focus-within:border-slate-400 focus:outline-slate-400 sm:text-lg p-2"
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search pokemons"
        autoFocus
      />
    </form>
  );
};

export default SearchBox;
