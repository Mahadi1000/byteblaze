import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import BlogPage from "../pages/BlogPage";
import Home from "../pages/Home";
import BookmarkPage from "../pages/BookmarkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/bookmark",
        element: <BookmarkPage />,
      },
    ],
  },
]);

export default router;
