import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleStory } from "../../store/stories";
import "./storydetails.css";

const StoryDetails = () => {
  const dispatch = useDispatch();
  // const currentUser = useSelector((state) => state.session.user);
  // console.log(`Current User`, currentUser);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    dispatch(getSingleStory(id));
  }, [dispatch]);

  const commentsObj = useSelector((state) => state.comments);
  // console.log(`commentOBJ`, commentsObj);

  const commentsArr = Object.values(commentsObj);
  // console.log(`commentsArr`, commentsArr);

  const storySearch = useSelector((state) => state.stories[id]);
  // console.log(`StorySerach`, storySearch);

  if (!storySearch) {
    return null;
  }

  return (
    <>
      <div className="story-details-container">
        {storySearch ? (
          <img src={`${storySearch.imageUrl}`} alt="storyPic" />
        ) : null}
        {storySearch ? <h1>{storySearch.title}</h1> : null}
        {storySearch ? <p>{storySearch.body}</p> : null}
        <div className="comment-container">
          {commentsArr.map((comment) => (
            <div key={comment.id}>
              <p>{comment.User.username}</p>
              <p>{comment.body}</p>
              <p>{`created: ${comment.createdAt}`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoryDetails;
