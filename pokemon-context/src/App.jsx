import "./App.css";
import Pokemon from "./component/pokemon";
import PokemonStore from "./context/PokemonStore";

function App() {
  return (
    <PokemonStore>
      <Pokemon />
    </PokemonStore>
  );
}

export default App;
