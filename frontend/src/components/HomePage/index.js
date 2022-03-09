import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStories } from "../../store/stories";
import "./homepage.css";

const HomePage = () => {
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
      <div className="stories-container">
        <ul>
          {storiesArr.map((story, i) => (
            <Link
              to={`/stories/${story.id}`}
              key={"" + story.id}
              style={{ textDecoration: "none" }}
            >
              <img src={`${story?.imageUrl}`} alt="storyPic" />
              <h3>{story?.title}</h3>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
