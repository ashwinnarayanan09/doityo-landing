import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Blog } from "../models/Blog";

function BlogDetail() {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
  const [blog, setBlog] = useState<Blog>();
  // fetch data
  const baseUrl =
    "https://www.googleapis.com/blogger/v3/blogs/3115211964733177924/posts?key=AIzaSyCYtJeewAy6JhfVfOjW_J7tCZ5-6Q4VktE";

  const getBlog = async () => {
    const response = await (await fetch(baseUrl)).json();

    const parser = new DOMParser();
    response.valueOf()["items"].forEach((element) => {
      const html = parser.parseFromString(element["content"], "text/html");
      const img = html.querySelector("img");
      const url = img ? img.src : "";
      if (element["title"].toLowerCase().replaceAll(" ", "-") == id) {
        let blog = new Blog(
          element["title"].toLowerCase().replaceAll(" ", "-"),
          element["title"],
          element["content"],
          url,
          element["labels"][0],
          element["status"],
          element["author"]
        );
        setBlog(blog);
      }
    });
  };

  function createMarkup() {
    if (blog?.article !== undefined) {
      return { __html: blog?.article };
    }
  }

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {blog?.title}
      </h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}
export default BlogDetail;
