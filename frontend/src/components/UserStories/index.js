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

  // const handleUpdate = async (e) => {
  //   let storyId = e.target.id;
  //   // console.log(storyId);

  //   dispatch(deleteStory(storyId));
  // };

  return (
    <>
      <div className="mystories-container">
        <button className="create-story-button">
          <Link className="create-story-button-link" to="/stories/create">
            Create Story
          </Link>
        </button>
        {authorSearch.map((story, i) => (
          <div key={i}>
            <Link
              to={`/stories/${story.id}`}
              style={{ textDecoration: "none" }}
            >
              {story ? <img src={`${story?.imageUrl}`} alt="storyPic" /> : null}
              <h3>{story?.title}</h3>
            </Link>
            <div className="edit-delete-btn-container">
              <button className="update-story-btn">
                <Link
                  className="update-story-btn-link"
                  to={`/stories/${story.id}/edit`}
                >
                  Edit
                </Link>
              </button>
              <button
                className="delete-story-btn"
                id={story.id}
                onClick={handleDelete}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserStories;
