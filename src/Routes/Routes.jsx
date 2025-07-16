import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import BlogsPage from "../pages/BlogsPage";
import Home from "../pages/Home";
import BookmarkPage from "../pages/BookmarkPage";
import BlogPage from "../pages/BlogPage";
import Content from "../Components/Content";
import Author from "../Components/Author";

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
        element: <BlogsPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogPage />,
        children: [
          {
            index: true,
            element: <Content />,
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) => {
              return fetch(`https://dev.to/api/articles/${params?.id}`)
            },
          },
        ]
      },
      {
        path: "/bookmark",
        element: <BookmarkPage />,
      },
    ],
  },
]);

export default router;
