import { csrfFetch } from "../store/csrf";

const LOAD = "comments/LOAD";
const POST = "comments/POST";

const load = (payload) => ({
  type: LOAD,
  payload,
});

const post = (payload) => ({
  type: POST,
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
    default:
      return state;
  }
}
