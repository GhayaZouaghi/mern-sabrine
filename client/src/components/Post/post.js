import React from "react";
import Moment from "react-moment";
import "./post.css";
import avatar from "../../assests/avatar.png";

const Post = ({ post }) => {
  return (
    <div className="container mt-5 mb-5" style={{ width: "1200px" }}>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="d-flex justify-content-between p-2 px-3">
              <div className="d-flex flex-row align-items-center">
                {" "}
                <img
                  // src="https://i.imgur.com/UXdKE3o.jpg"
                  src={avatar}
                  alt="aaaaa"
                  width={50}
                  className="rounded-circle"
                />
                <div className="d-flex flex-column ml-2">
                  {" "}
                  <span className="font-weight-bold"></span>{" "}
                  {/* <small className="text-primary">{post.user.name}</small>{" "} */}
                  <small className="text-primary">{post.user}</small>{" "}
                </div>
              </div>
              <div className="d-flex flex-row mt-1 ellipsis">
                {" "}
                {/* <i className="fa-solid fa-trash-can"></i> */}
                <small className="mr-2">
                  Posted on{" "}
                  <Moment format="DD/MM/YYYY">{post.createdAt}</Moment>
                </small>{" "}
              </div>
            </div>{" "}
            {/* <img
              src="https://i.imgur.com/xhzhaGA.jpg"
              almmmm"
              className="img-fluid"
            /> */}
            <div className="p-2">
              <p className="text-justify">{post.message}</p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row icons d-flex align-items-center">
                  {" "}
                  <i className="fa fa-heart" />{" "}
                </div>
                <div className="d-flex flex-row muted-color">
                  {" "}
                  <span>2 comments</span>{" "}
                </div>
              </div>
              <hr />
              <div className="comments">
                <div className="d-flex flex-row mb-2">
                  {" "}
                  <img
                    src="https://i.imgur.com/9AZ2QX1.jpg"
                    alt="hhhh"
                    width={40}
                    className="rounded-image"
                  />
                  <div className="d-flex flex-column ml-2">
                    {" "}
                    <span className="name">commenterµID NAmr</span>{" "}
                    <small className="comment-text">
                      comment text
                      I like this alot! thanks alot

                    </small>
                  
                    <div className="d-flex flex-row align-items-center status">
                      {" "}
                      <small>Delete</small> <small>Update</small>{" "}
                      <small>Translate</small> <small>18 mins</small>{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row mb-2">
                  {" "}
                  <img
                    src="https://i.imgur.com/1YrCKa1.jpg"
                    alt="rrrrr"
                    width={40}
                    className="rounded-image"
                  />
                  <div className="d-flex flex-column ml-2">
                    {" "}
                    <span className="name">Elizabeth goodmen</span>{" "}
                    <small className="comment-text">Thanks for sharing!</small>
                    <div className="d-flex flex-row align-items-center status">
                      {" "}
                      <small>Like</small> <small>Reply</small>{" "}
                      <small>Translate</small> <small>8 mins</small>{" "}
                    </div>
                  </div>
                </div>
                <div className="comment-input">
                  {" "}
                  <input type="text" className="form-control" 
                    name="text"
                      cols="100"
                      rows="1"
                      placeholder="Post a comment"
                      // value={text}
                      // onChange={e => setText(e.target.value)}
                      
                  />
                  <div className="fonts">
                    {" "}
                    <i className="fa fa-camera" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
