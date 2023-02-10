import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import addNewBlogPost from "./../../redux/thunk/blogs/addNewBlog";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  // const blogs = useSelector((state) => state.blogs.blogs);

  const now = new Date();
  // Date
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  const date = `${month}-${day}-${year}`;

  const handelAddProduct = (data) => {
    const userPhoto = data.photo[0];
    const formData = new FormData();
    formData.append("image", userPhoto);

    const blog = {
      date,
      category: data.category,
      title: data.title,
      picture: data.photo,
      description: data.description,
      authorName: "Nasim Uddin",
    };

    // console.log(blog);
    dispatch(addNewBlogPost(blog));

    reset();
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-3 text-red-600">
        Add a Blog
      </h2>
      <form
        onSubmit={handleSubmit(handelAddProduct)}
        className="w-[95%] md:w-[80%] mx-auto card card-body shadow-2xl bg-white"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Blog Title"
            className="input input-bordered"
            required
          />
        </div>

        <div className="md:flex items-center gap-4">
          <div className="form-control  md:w-[50%]">
            <label className="label">
              <span className="label-text font-semibold">Blog Thumbnail</span>
            </label>
            <input
              {...register("photo")}
              type="text"
              className="file-input w-full input-bordered"
              required
            />
          </div>

          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text font-semibold">Category:</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full "
            >
              <option defaultValue="HTML" className="text-base">
                HTML
              </option>
              <option defaultValue="HTML" className="text-base">
                CSS
              </option>
              <option defaultValue="HTML" className="text-base">
                JavaScript
              </option>
              <option defaultValue="HTML" className="text-base">
                Bootstrap
              </option>
              <option defaultValue="HTML" className="text-base">
                React
              </option>
            </select>
          </div>
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered mb-2"
            {...register("description")}
            placeholder="Short Description"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
