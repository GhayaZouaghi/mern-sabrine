import axios from "axios";
import { GET_POST_FAIL, GET_POST_LOAD, GET_POST_SUCC } from "../ActionsType/post";



export const getPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POST_LOAD
  })
  try {
    let result = await axios.get("/api/post");
    dispatch({
      type: GET_POST_SUCC,
      payload: result.data
    });
  } catch (error) {
    //   console.log (error)  // affichher l'erreur pour connaitre le payload
    dispatch({
      type: GET_POST_FAIL,
      payload: error.response.data,
    });
  }
};
