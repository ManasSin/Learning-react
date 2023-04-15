import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./components/pages";

function App() {
  return (
    <Routes>
      <Route index element={<LoadingPage />} />
    </Routes>
  );
}

export default App;
