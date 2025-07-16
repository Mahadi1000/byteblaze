import toast, { Toaster } from "react-hot-toast";

export const getBlogs = () => {
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  return blogs;
};

export const saveBlog = (blog) => {
  let blogs = getBlogs();

  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    toast.error("Blog already saved");
    return;
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog saved successfully");
};
