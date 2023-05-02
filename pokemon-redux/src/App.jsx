import SearchBox from "./Components/SearchBox";
import PokemonList from "./Components/PokemonList";

function App() {
  return (
    <section className="max-w-3xl p-8 mx-auto">
      <SearchBox />
      <PokemonList />
    </section>
  );
}

export default App;
