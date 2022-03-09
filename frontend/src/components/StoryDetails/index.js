import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStories } from "../../store/stories";
import "./storydetails.css";

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
      <div className="story-details-container">
        <img src={`${storySearch.imageUrl}`} alt="storyPic" />
        <h1>{storySearch.title}</h1>
        <p>{storySearch.body}</p>
      </div>
    </>
  );
};

export default StoryDetails;
