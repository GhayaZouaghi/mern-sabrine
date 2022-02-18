import axios from "axios";
import {
  GET_POST_FAIL,
  GET_POST_LOAD,
  GET_POST_SUCC,
  ADD_POST_FAIL,
  ADD_POST_SUCC,
  ADD_POST_LOAD,
} from "../ActionsType/post";

// !GET all posts

export const getPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POST_LOAD,
  });
  try {
    let result = await axios.get("/api/post");
    dispatch({
      type: GET_POST_SUCC,
      payload: result.data,
    });
  } catch (error) {
    //   console.log (error)  // affichher l'erreur pour connaitre le payload
    dispatch({
      type: GET_POST_FAIL,
      payload: error.response.data,
    });
  }
};

// !ADD new Post
export const addPost = (newText) => (dispatch) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },

  dispatch({
    type: ADD_POST_LOAD,
  });
  try {
    const result = axios.post("/api/post", newText);

    dispatch({
      type: ADD_POST_SUCC,
      payload: result.data,
    });
    dispatch(getPosts());
    // setText('');
    // dispatch (cancelPost())
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload: { msg: error.response.data.msg, status: error.response.status },
    });
  }
};

// !like and unlike actions

// export const likePost = (postId, userId) => async (dispatch) => {
//   // dispatch({
//   //   type: UPDATE_LIKES_LOAD
//   // })

//   try {
//       let result = await axios.patch("/api/post/like-post/:_id");
//       //   data: { id: userId },
//     dispatch({
//         type: UPDATE_LIKES_SUCC,
//         payload: result.data
//         // payload: { postId, userId }
//       });
//     } catch (error) {
//       //   console.log (error)  // affichher l'erreur pour connaitre le payload
//       dispatch({
//         type:UPDATE_LIKES_FAIL,
//         payload: error.response.data,
//       });
//     }
