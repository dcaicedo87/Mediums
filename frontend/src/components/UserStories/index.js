import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStories, getUserStories } from "../../store/stories";
import "./userstories.css";

const UserStories = () => {
  const dispatch = useDispatch();
  //   const stories = useSelector((state) => state.stories);
  //   console.log(`STORE stories:`, stories);

  //   const storiesArr = Object.values(stories);
  //   console.log(`The StoriesArr:`, storiesArr);

  const { id } = useParams();
  console.log(id);

  //   console.log(`AUTHOR SEARCH`, authorSearch);

  //   const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  const stories = useSelector((state) => state.stories);

  const storiesArr = Object.values(stories);
  console.log(`The storiesArr:`, storiesArr);

  // LOOK AT THIS CODE BELOW TO NARROW SEARCHES BY authorId.
  //   const authorSearch = stories.filter(
  //     (story) => story.authorId.toString() === id
  //   );
  //   console.log(authorSearch);

  if (!stories) {
    return null;
  }

  return (
    <>
      <div>
        <h1>MY STORIES PAGE</h1>
      </div>
    </>
  );
};

export default UserStories;
