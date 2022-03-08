import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStories } from "../../store/stories";
// import { Link } from "react-router-dom";
// import "./homepage.css";

const StoryDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  const { id } = useParams();
  console.log(id);

  const stories = useSelector((state) => state.stories);
  const storiesArr = Object.values(stories);
  console.log(`The StoriesArr DETAILS:`, storiesArr);

  const storySearch = storiesArr.find((story) => story.id.toString() === id);
  console.log(`STORY SEARCH`, storySearch);

  if (!stories) {
    return null;
  }

  return (
    <>
      <div>
        <h2>You Have Landed</h2>
      </div>
    </>
  );
};

export default StoryDetails;
