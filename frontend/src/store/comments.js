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

const remove = (payload) => ({
  type: DELETE,
  payload,
});

// POST comment
export const postComment = (comment) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });

  const newComment = await response.json();
  if (newComment.errors) return newComment.errors;
  dispatch(post(newComment));
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

export default function commentsReducer(state = initialState, action) {
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
      newState[action.payload?.id] = action.comment;
      return newState;
    }
    case DELETE:
      const newState = { ...state };
      delete newState[action.storyId];
      return newState;
    default:
      return state;
  }
}
