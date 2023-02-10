import { toast } from "react-toastify";
import { addNewBlog } from "../../actions/blogAction";

const addNewBlogPost = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addNewBlog({
          _id: data.insertedId,
          ...blog,
        })
      );
      toast.success("Add Blog Success");
    }
  };
};

export default addNewBlogPost;
