import { Routes, Route, Router } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import BlogList from "./components/BlogList";
import Editor from "./components/Editor";

import Home from "./components/Home";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
    </Routes>
  );
};
export default Main;