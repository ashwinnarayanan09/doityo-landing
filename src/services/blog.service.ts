import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

import { Blog } from "../models/Blog";

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
  return data;
};

function filterBlogs(area) {
  console.log(area);
  //let filtredBlogs = Blog[]
  //fetchBlogs().then(res=> filtredBlogs = res);
  return fetchBlogs();
}

export { fetchBlogs, filterBlogs };
