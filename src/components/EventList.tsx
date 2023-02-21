import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { fetchBlogs, filterBlogs } from "../services/blog.service";
import { Blog } from "../models/Blog";
import { db } from "../fire";

const buttons = ["all"];

const EventList = () => {
  const [events, setEvents] = useState<Blog[]>([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "events")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      console.log(newData);
    });
  };

  useEffect(() => {
    console.log("useEffect");
    fetchBlogs().then((res) => {
      setEvents(res.filter((event) => event.area == "events"));
    });
    fetchPost();
  }, []);

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        {events.map((item, i) => (
          <div className="max-w-sm" key={item.id}>
            <Card imgSrc={item.image} style={Container}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link
                  to={`/events/${item.id}`}
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

export default EventList;
