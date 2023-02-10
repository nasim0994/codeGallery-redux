import { fetchBlogs } from "../../actions/blogAction";

const fetchBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();
    if (data.length) {
      dispatch(fetchBlogs(data));
    }
  };
};

export default fetchBlogData;
