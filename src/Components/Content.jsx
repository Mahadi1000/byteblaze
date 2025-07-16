import React, { useEffect, useState } from "react";
import { BsMarkdown } from "react-icons/bs";
import { useParams } from "react-router";
import { handleBlog } from "../utils/api";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const data = await handleBlog(id);
      setBlog(data);
    };
    fetchBlog();
  }, [id]);

  console.log(blog);
  return (
    <div className="mx-auto transition border-2 p-2  border-opacity-30   group hover:no-underline focus:no-underline ">
      <img
        className="object-cover w-full rounded h-44 "
        src={blog?.cover_image || "https://source.unsplash.com/random/480x360?1"}
      />
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
          {blog?.tags &&
            blog?.tags.map((tag) => (
              <a
                key={tag}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline "
              >
                #{tag}
              </a>
            ))}
        </div>
      </div>
      <div className="space-y-2">
        <a
          target="_blank"
          href={blog?.url}
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >
          {blog?.title}
        </a>

        <Markdown rehypePlugins={[rehypeRaw]}>{blog?.body_markdown}</Markdown>
      </div>
    </div>
  );
};

export default Content;
