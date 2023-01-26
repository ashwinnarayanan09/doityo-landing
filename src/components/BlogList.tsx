import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

import { Blog } from "../models/Blog";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  // fetch data
  const baseUrl =
    "https://www.googleapis.com/blogger/v3/blogs/3115211964733177924/posts?key=AIzaSyCYtJeewAy6JhfVfOjW_J7tCZ5-6Q4VktE";

  const fetchBlogs = async () => {
    const response = await (await fetch(baseUrl)).json();

    const data: Blog[] = [];
    const parser = new DOMParser();
    response.valueOf()["items"].forEach((element) => {
      const html = parser.parseFromString(element["content"], "text/html");
      const img = html.querySelector("img");
      const url = img ? img.src : "";

      let blog = new Blog(
        element["title"].toLowerCase().replaceAll(" ", "-"),
        element["title"],
        element["content"],
        url,
        element["labels"][0],
        element["status"],
        element["author"]
      );
      data.push(blog);
    });
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      {blogs.map((item, i) => (
        <div className="max-w-sm">
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
  );
};

const Container = { margin: "10px" };

export default BlogList;
