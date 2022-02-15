import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../../components/Post/post";
import SideNav from "../../components/SideNav/SideNav";
import { getPosts } from "../../JS/Actions/post";

import "./News.css";

const News = () => {
  const dispatch = useDispatch();
  const listPosts = useSelector((state) => state.postReducer.listPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posi">
      <SideNav />

      <div className="posts">
        {listPosts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};
export default News;
