import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Link } from "react-router-dom";
import { Navbar, Button } from "flowbite-react";

const Menu = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://app.doityo.io">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          DoItYo
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a
          href="https://app.doityo.io"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get Started
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">Home</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="events">Events</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Menu;
