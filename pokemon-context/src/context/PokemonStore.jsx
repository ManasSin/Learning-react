import PokemonContext from "./PokemonContext";
import { PokemonFetch } from "./store";
const PokemonStore = ({ children }) => {
  return (
    <PokemonContext.Provider value={PokemonFetch()}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonStore;
