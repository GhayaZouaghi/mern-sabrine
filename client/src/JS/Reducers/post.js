import {
  GET_POST_FAIL,
  GET_POST_LOAD,
  GET_POST_SUCC,
} from "../ActionsType/post";

const initState = {
  load: false,
  listPosts: [],
  errors: [],
};
const postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POST_LOAD:
      return { ...state, load: true };
    case GET_POST_SUCC:
      return { ...state, load: false, listPosts: payload.listPosts };
    case GET_POST_FAIL:
      return { ...state, load: false, errors: payload.errors };

    default:
      return state;
  }
};

export default postReducer;
