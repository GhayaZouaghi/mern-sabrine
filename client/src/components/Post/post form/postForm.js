import React, { useState } from "react";
import "./postForm.css";
import avatar from "../../../assests/avatar.png";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../JS/Actions/post";

const FormPost = () => {
  const [text, setText] = useState( "" );
  // const userData = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();
 
  const cancelPost = () => {
    setText("");
  };

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
                  <small className="text-primary">post.user</small>{" "}
                </div>
              </div>
            </div>{" "}
            {/* <img
              src="https://i.imgur.com/xhzhaGA.jpg"
              almmmm"
              className="img-fluid"
            /> */}
            <div className="p-2">
              <p className="text-justify">
                <FormControl
                  type="text"
                  style={{ width: 540, height: 44, border: 0, fontSize: 16 }}
                  name="message"
                  placeholder="Say Something Here..."
                  onChange={(e) => setText(e.target.value)}
                // onChange={handleChange}
                  value={text}
                />
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row icons d-flex align-items-center">
                  {" "}
                  <i onClick={cancelPost} className="fa fa-trash" />{" "}
                </div>
                <div className="d-flex flex-row muted-color">
                  <Button
                    className="btn"
                    style={{ fontSize: 14 }}
                    onClick={() => dispatch(addPost(text))}
                  >
                    Share
                  </Button>{" "}
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPost;
