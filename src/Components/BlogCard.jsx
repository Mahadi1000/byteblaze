import React from 'react'
import { Link } from 'react-router';

const BlogCard = ({blog, index}) => {
  return (
    <div className='flex relative'>
    <Link className="max-w-sm mx-auto group hover:no-underline hover:scale-105 border-opacity-30 border-2
      border-primary hover:border-secondary focus:no-underline bg-gray-50 hover:duration-100 duration-100">
        <img
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={
            blog.cover_image || "https://source.unsplash.com/random/480x360?1"
          }
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {blog.title || "No title"}
          </h3>
          <span className="text-xs text-gray-600">
            {new Date(blog.published_at).toLocaleDateString() || "No date"}
          </span>
          <p>{blog.description || "No description"}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard