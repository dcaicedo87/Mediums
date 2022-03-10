import { csrfFetch } from "../store/csrf";

const LOAD = "stories/LOAD";
const POST = "stories/POST";
const DELETE = "stories/DELETE";
const UPDATE = "stories/UPDATE";

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

const update = (story) => ({
  type: UPDATE,
  story,
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
  if (newStory.errors) return newStory.errors;
  dispatch(post(newStory));
};

//DELETE story
export const deleteStory = (storyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${storyId}`, {
    method: "delete",
  });

  if (response.ok) {
    const deletedStory = await response.json();
    dispatch(remove(deletedStory.id));
  }
};

// UPDATE story
export const updateStory = (story) => async (dispatch) => {
  const res = await csrfFetch(`/api/stories/${story.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(story),
  });
  const updatedStory = await res.json();
  dispatch(update(updatedStory));
  return updatedStory;
};

const initialState = {};

// Stories Reducer
const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const newState = {};
      action.stories.forEach((story) => (newState[story.id] = story));
      return newState;
    }
    case POST: {
      const newState = { ...state };
      newState[action.story?.id] = action.story;
      return newState;
    }
    case UPDATE: {
      const newState = { ...state };
      newState[action.story?.id] = action.story;
      return newState;
    }
    case DELETE:
      const newState = { ...state };
      delete newState[action.storyId];
      return newState;
    default:
      return state;
  }
};

export default storiesReducer;
