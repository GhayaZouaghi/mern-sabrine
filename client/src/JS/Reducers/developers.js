import {
  GET_DEVELOPERS_LOAD,
  GET_DEVELOPERS_SUCC,
  GET_DEVELOPERS_FAIL,
} from "../ActionsType/developers.js";

const initState = {
  listUsers: [],
  load: false,
  errors: null,
};

export const devReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DEVELOPERS_LOAD:
      return { ...state, load: true };
    case GET_DEVELOPERS_SUCC:
      return { ...state, load: false, listUsers: payload };
    case GET_DEVELOPERS_FAIL:
      return { ...state, load: false, errors: payload };

    default:
      return state;
  }
};
export default devReducer