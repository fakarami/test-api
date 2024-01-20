import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./components/users";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}