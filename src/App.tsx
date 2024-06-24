import { Outlet } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
