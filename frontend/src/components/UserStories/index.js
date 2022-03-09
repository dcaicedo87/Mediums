import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { getStories } from "../../store/stories";
import { Link } from "react-router-dom";
import { deleteStory } from "../../store/stories";
// import CreateStory from "../CreateStory";
import "./userstories.css";

const UserStories = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const userId = user.id;
  console.log(`userId:`, userId);

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  const stories = useSelector((state) => state.stories);

  const storiesArr = Object.values(stories);
  console.log(`The storiesArr:`, storiesArr);

  // LOOK AT THIS CODE BELOW TO NARROW SEARCHES BY authorId.
  const authorSearch = storiesArr.filter((story) => story.authorId === userId);
  console.log(`AUTHOR SEARCH:`, authorSearch);

  // const authorSearch = stories.forEach((story) =)

  if (!stories) {
    return null;
  }

  const handleDelete = async (e) => {
    let storyId = e.target.id;
    // console.log(storyId);

    dispatch(deleteStory(storyId));
  };

  return (
    <>
      <div className="mystories-container">
        <button className="create-story-button">
          <Link to="/stories/create">Create Story</Link>
        </button>
        {authorSearch.map((story, i) => (
          <>
            <button className="update-story-button">UPDATE</button>
            <Link
              to={`/stories/${story.id}`}
              key={"" + story.id}
              style={{ textDecoration: "none" }}
            >
              <img src={`${story?.imageUrl}`} alt="storyPic" />
              <h3>{story?.title}</h3>
            </Link>
            <button
              className="delete-story-button"
              id={story.id}
              onClick={handleDelete}
            >
              DELETE
            </button>
          </>
        ))}
      </div>
    </>
  );
};

export default UserStories;
