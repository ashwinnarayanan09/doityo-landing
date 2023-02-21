import { Routes, Route, Router } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import BlogList from "./components/BlogList";
import Editor from "./components/Editor";
import EventDetail from "./components/EventDetail";
import EventList from "./components/EventList";

import Home from "./components/Home";
import MyComponent from "./components/MyComponent";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/my" element={<MyComponent />} />
    </Routes>
  );
};
export default Main;
