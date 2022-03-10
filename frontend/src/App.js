// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import StoryDetails from "./components/StoryDetails";
import UserStories from "./components/UserStories";
import CreateStory from "./components/CreateStory";
import EditStory from "./components/EditStory";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/stories/create">
            <CreateStory />
          </Route>
          <Route path="/stories/author/:id">
            <UserStories />
          </Route>
          <Route exact path="/stories/:id/edit">
            <EditStory />
          </Route>
          <Route path="/stories/:id">
            <StoryDetails />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
