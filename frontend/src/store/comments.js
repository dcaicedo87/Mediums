import { csrfFetch } from "../store/csrf";

const LOAD = "comments/LOAD";
const POST = "comments/POST";
const DELETE = "comments/DELETE";

const load = (payload) => ({
  type: LOAD,
  payload,
});

const post = (payload) => ({
  type: POST,
  payload,
});

const remove = (id) => ({
  type: DELETE,
  id,
});

// POST comment
export const postComment = (comment) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });

  // console.log(`I GOT HERE AFTER THE FETCH`);
  let newComment;
  newComment = await response.json();
  // console.log(`newComment =`, newComment);
  if (newComment.errors) return newComment.errors;
  if (newComment) {
    // console.log(`I got to the DISPATCH`);
    dispatch(post(newComment));
    return newComment;
  }
};

//DELETE comment
export const deleteComment = (commentId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: "delete",
  });

  if (response.ok) {
    const deletedComment = await response.json();
    dispatch(remove(deletedComment.id));
  }
};

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const newState = {};
      action.payload.comment.forEach(
        (comment) => (newState[comment.id] = comment)
      );
      return newState;
    }
    case POST: {
      const newState = { ...state };
      newState[action.payload?.id] = action.payload;
      return newState;
    }
    case DELETE:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
