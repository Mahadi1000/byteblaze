import React, { useEffect, useState } from "react";
import { getBlogs } from "../utils";
import BlogCard from "../Components/BlogCard";
import EmptyState from "../Components/EmptyState";

const BookmarkPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const savedBlogs = getBlogs();
    setBlogs(savedBlogs);
  }, []);
  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  if (blogs.length === 0) {
    return (
      <EmptyState
        message="No blogs found"
        address="/blog"
        label="Go to blogs"
      />
    );
  }
  return (
    <section className=" px-4 sm:px-8 lg:px-12 py-8">
      <div className="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              deletable={true}
              handleDelete={handleDelete}
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookmarkPage;
