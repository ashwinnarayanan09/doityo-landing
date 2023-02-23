import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Blog } from "../models/Blog";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../fire";
import { Button, Label, TextInput } from "flowbite-react";
function EventDetail() {
  // Get the userId param from the URL.
  let { id } = useParams();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
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

  const register = async (e) => {
    // e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "registrations"), {
        email: email,
        event: id,
      });
      //navigate("https://buy.stripe.com/aEU00Xfurg2T4zS5kk");
      // window.open("https://buy.stripe.com/aEU00Xfurg2T4zS5kk", "_blank");
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
      <div className="flex">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@example.com"
              required={true}
            />
          </div>
          <a
            href="https://buy.stripe.com/aEU00Xfurg2T4zS5kk"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={register}
          >
            Register & Pay
          </a>
        </form>
      </div>
    </div>
  );
}
export default EventDetail;
