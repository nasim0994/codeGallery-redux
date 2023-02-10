import { toast } from "react-toastify";
import { deleteBlog } from "./../../actions/blogAction";
const deleteBlogData = (id, refetch) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (data.acknowledged) {
      dispatch(deleteBlog(id));
      toast.success("Delete Success");
      refetch();
    }
  };
};

export default deleteBlogData;
