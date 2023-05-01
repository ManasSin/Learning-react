import { Router, ReactLocation, Outlet } from "@tanstack/react-location";
import { Routes } from "./Router/Routes";

function App() {
  const myLocation = new ReactLocation();
  return (
    <>
      <Router location={myLocation} routes={Routes}>
        <Outlet />
      </Router>
    </>
  );
}

export default App;
