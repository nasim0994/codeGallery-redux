import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import deleteBlogData from "./../../redux/thunk/blogs/deleteBlog";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const dispatch = useDispatch();

  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      fetch(`http://localhost:5000/blogs`).then((res) => res.json()),
  });

  const handelUserDelete = (id) => {
    const confirm = window.confirm(`Are you sure delete this user`);
    if (confirm) {
      dispatch(deleteBlogData(id, refetch));
    }
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        {blogs?.length === 0 ? (
          <h2 className="text-2xl text-center text-red-600 font-semibold">
            No Blog
          </h2>
        ) : (
          <div>
            <h2 className="text-center text-3xl font-semibold mb-4">
              Total Blogs: {blogs.length}
            </h2>

            <table className="table w-full border">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {blogs?.map((blog, i) => (
                  <tr key={blog._id}>
                    <th>{i + 1}</th>
                    <td>{blog?.title}</td>
                    <td>{blog.category}</td>
                    <td>{blog.authorName}</td>
                    <td>
                      <button
                        onClick={() => handelUserDelete(blog._id)}
                        className="text-2xl text-red-700"
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/admin/editBlog/${blog._id}`}
                        className="text-2xl text-primary"
                      >
                        <TbEdit />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlog;
