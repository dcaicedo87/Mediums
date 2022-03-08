const LOAD = "stories/LOAD";
// const POST = "stories/POST";

const load = (stories) => ({
  type: LOAD,
  stories,
});
console.log("LOAD IS HAPPENING", load);

// GET stories THUNK
export const getStories = () => async (dispatch) => {
  console.log(`HITTING THE THUNK~~`);
  const response = await fetch(`/api/stories`);

  if (response.ok) {
    const stories = await response.json();
    dispatch(load(stories));
  }
};

const initialState = {
  stories: [],
};

// Stories Reducer
const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        stories: [...action.stories],
      };
    }
    default:
      return state;
  }
};

export default storiesReducer;
