import {
  // ADD_POST_SUCC,
  GET_POST_FAIL,
  GET_POST_LOAD,
  GET_POST_SUCC,
  // UPDATE_LIKES_LOAD,
  // UPDATE_LIKES_SUCC,
} from "../ActionsType/post";

const initState = {
  listPosts: [],
  post: null,
  errors: [],
  load: true,
  // load: false,
  // listPosts: [],
  // errors: [],
};
const postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POST_LOAD:
      return { ...state, load: true };
    case GET_POST_SUCC:
      return { ...state, load: false, listPosts: payload.listPosts };
    case GET_POST_FAIL:
      return { ...state, load: false, errors: payload.errors };

   
      // case ADD_POST_SUCC:
      //   return {...state,load: false, post:payload.post,listPosts: payload.listPosts}
      //       // setting 'payload' first will set new posts first in UI
            
            // listPosts: [payload, ...state.listPosts],
            
       
       
   
      //  case UPDATE_LIKES_SUCC:
    //    return state.map((post) => {
    //       if (post._id === payload.postId) {
    //         return {
    //           ...post,
    //           // eslint-disable-next-line no-undef
    //           likers: [payload.userId, ...payload.post.likers],
    //         };
    //       }
    //       return post;
    //     });
   default:
      return state;
  }
}
export default postReducer;
