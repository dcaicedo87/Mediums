const LOAD = "comments/LOAD";

const load = (payload) => ({
  type: LOAD,
  payload,
});

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
    default:
      return state;
  }
}
