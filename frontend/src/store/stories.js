import { csrfFetch } from "../store/csrf";

const LOAD = "stories/LOAD";
const POST = "stories/POST";
const DELETE = "stories/DELETE";

const load = (stories) => ({
  type: LOAD,
  stories,
});

const post = (story) => ({
  type: POST,
  story,
});

const remove = (storyId) => ({
  type: DELETE,
  storyId,
});

// console.log("LOAD IS HAPPENING", load);

// GET stories THUNK
export const getStories = () => async (dispatch) => {
  // console.log(`HITTING THE THUNK~~`);
  const response = await fetch(`/api/stories`);

  if (response.ok) {
    const stories = await response.json();
    dispatch(load(stories));
  }
};

// GET user stories
export const getUserStories = (userId) => async (dispatch) => {
  const response = await fetch(`/api/stories/author/${userId}`);

  if (response.ok) {
    const authorStories = await response.json();

    dispatch(load(authorStories));
  }
};

// POST user story
export const postStory = (story) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(story),
  });
  const newStory = await response.json();
  dispatch(post(newStory));
};

//DELETE story
export const deleteStory = (storyId) => async (dispatch) => {
  const response = await fetch(`/api/stories/${storyId}`, {
    method: "delete",
  });

  if (response.ok) {
    const { id: deletedStoryId } = await response.json();
    dispatch(remove(deletedStoryId));
  }
};

const initialState = {
  stories: [],
};

// Stories Reducer
const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      // return {
      //   ...state,
      //   stories: [...action.stories],
      // };
      const newState = {};
      action.stories.forEach((story) => (newState[story.id] = story));
      return newState;
    }
    case POST: {
      return {
        ...state,
        stories: [...state.stories, action.story],
      };
    }
    case DELETE:
      const newState = { ...state };
      delete newState[action.story];
      return newState;
    default:
      return state;
  }
};

export default storiesReducer;
