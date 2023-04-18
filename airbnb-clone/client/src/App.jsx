import { Route, Routes } from "react-router-dom";
import { LoadingPage, Header } from "./components/pages";

function App() {
  return (
    <Routes>
      <Route index element={<Header />} />
    </Routes>
  );
}

export default App;
