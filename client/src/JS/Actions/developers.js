import axios from "axios";

import { GET_DEVELOPERS_LOAD, GET_DEVELOPERS_SUCC, GET_DEVELOPERS_FAIL } from '../ActionsType/developers';


export const getdevops = () => async (dispatch) => {
  dispatch({
    type: GET_DEVELOPERS_LOAD
  })
  try {
    let result = await axios.get("/api/user/developers");
    dispatch({
      type: GET_DEVELOPERS_SUCC,
      payload: result.data.listUsers
    });
  } catch (error) {
    //   console.log (error)  // afficher l'erreur pour connaitre le payload
    dispatch({
      type: GET_DEVELOPERS_FAIL,
      payload: error.response.data,
    });
  }
};
