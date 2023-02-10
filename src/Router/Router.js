import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Admin from "../Layout/Admin";
import AllBlog from "../AdminPages/AllBlogs/AllBlogs";
import AdminDashboard from "../AdminPages/AdminDashboard/AdminDashboard";
import History from "../pages/History/History";
import AddBlog from "../AdminPages/AddBlog/AddBlog";
import EditBlog from "./../AdminPages/editBlog/editBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
      {
        path: "/history/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/adminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/addBlog",
        element: <AddBlog />,
      },
      {
        path: "/admin/allBlog",
        element: <AllBlog />,
      },
      {
        path: "/admin/editBlog/:id",
        element: <EditBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
    ],
  },
]);

export default router;
