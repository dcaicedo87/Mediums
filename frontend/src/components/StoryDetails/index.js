import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../../store/stories";
import { Link } from "react-router-dom";
// import "./homepage.css";

const StoryDetails = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories);
  //   console.log(`STORE stories:`, stories);

  const storiesArr = Object.values(stories);
  //   console.log(`The StoriesArr:`, storiesArr);

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  if (!stories) {
    return null;
  }

  return (
    <>
      <div className="">
        <h2>You Have Landed</h2>
      </div>
    </>
  );
};

export default StoryDetails;
