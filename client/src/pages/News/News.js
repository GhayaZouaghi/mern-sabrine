import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "../../components/Post/post form/postForm";
import Post from "../../components/Post/post";
import SideNav from "../../components/SideNav/SideNav";
import { getPosts } from "../../JS/Actions/post";

import "./News.css";

const News = () => {
  const dispatch = useDispatch();
  const listPosts = useSelector((state) => state.allPostsReducer.listPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posi">
      <SideNav />
      <div>
       <div className="formps">
        <div>
        <PostForm />
        </div> 
      <div className="posts">
        {listPosts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};
export default News;
