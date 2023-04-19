import { Route, Routes } from "react-router-dom";
import { FilterBar, Header } from "./components/templates";
import { HomePage } from "./components/pages";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default App;
