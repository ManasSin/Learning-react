import { QueryClient, QueryClientProvider } from "react-query";
import PokemonStore from "./component/context/PokemonStore";
import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import Routes from "./component/router/routes";

function App() {
  const queryClient = new QueryClient();
  const location = new ReactLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonStore>
        <Router location={location} routes={Routes}>
          <Outlet />
        </Router>
      </PokemonStore>
    </QueryClientProvider>
  );
}

export default App;
