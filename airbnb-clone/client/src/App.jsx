import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./components/pages";
import { Header } from "./components/templates";

function App() {
  return (
    <Routes>
      <Route index element={<Header />} />
    </Routes>
  );
}

export default App;
