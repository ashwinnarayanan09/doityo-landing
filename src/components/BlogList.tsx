import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { fetchBlogs, filterBlogs } from "../services/blog.service";
import { Blog } from "../models/Blog";

const BlogList = () => {
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [buttons, setButtons] = useState<String[]>(["all"]);
  // fetch data

  function filterBlogs(area) {
    console.log(area);
    console.log(blogs);
    return blogs.filter((blog) => blog.area == area);
  }

  function handleBlogs(e) {
    let area = e.target.value;

    area != "all"
      ? setFilteredBlogs(filterBlogs(area))
      : fetchBlogs().then((res) => setFilteredBlogs(res));
  }

  function FilterButtons({ buttons, action }) {
    console.log(buttons);
    return (
      buttons &&
      buttons.map((button, i) => (
        <button
          key={i.toString()}
          value={button}
          onClick={action}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {button}
        </button>
      ))
    );
  }

  useEffect(() => {
    console.log("useEffect");
    fetchBlogs().then((res) => {
      setFilteredBlogs(res);
      setBlogs(res);
      const unique = Array.from(new Set(res.map((item) => item.area)));
      setButtons(["all", ...unique]);
    });
  }, []);

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <FilterButtons buttons={buttons} action={handleBlogs} />
        {filteredBlogs.map((item, i) => (
          <div className="max-w-sm" key={item.id}>
            <Card imgSrc={item.image} style={Container}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link
                  to={`/blogs/${item.id}`}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  {item.title}
                </Link>
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  {item.area}
                </span>
              </p>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

const Container = { margin: "10px" };

export default BlogList;
