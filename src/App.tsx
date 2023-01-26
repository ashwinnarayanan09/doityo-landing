import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Button } from "flowbite-react";
import Main from "./Main";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Main />
    </div>
  );
}

export default App;
