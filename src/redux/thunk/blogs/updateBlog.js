import { toast } from "react-toastify";
import { updatedBlog } from "../../actions/blogAction";

const updateBlogData = (id, updateBlog) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blogs/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateBlog),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(updatedBlog(updateBlog, id));
      toast.success("Update Success");
    }
  };
};

export default updateBlogData;
