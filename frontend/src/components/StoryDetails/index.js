import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleStory } from "../../store/stories";
import { deleteComment } from "../../store/comments";
import CommentEditor from "../CommentEditor";
import "./storydetails.css";

const StoryDetails = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  // console.log(`Current User`, currentUser);

  const currUserId = currentUser?.id;

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    dispatch(getSingleStory(id));
  }, [dispatch]);

  const commentsObj = useSelector((state) => state.comments);
  console.log(`commentOBJ`, commentsObj);

  const commentsArr = Object.values(commentsObj);
  console.log(`commentsArr`, commentsArr);

  const storySearch = useSelector((state) => state.stories[id]);
  // console.log(`StorySerach`, storySearch);

  let userComment;
  let userVerificiationSet = new Set();
  for (let i = 0; i < commentsArr.length; i++) {
    let comment = commentsArr[i];
    userVerificiationSet.add(comment.userId);
  }

  const commentsButton = () => {
    if (userVerificiationSet.has(currentUser?.id)) {
      for (let i = 0; i < commentsArr.length; i++) {
        let comment = commentsArr[i];
        if (comment.userId === currUserId) {
          userComment = comment;
          break;
        }
      }
      return (
        <button
          className="delete-story-button"
          id={userComment?.id}
          onClick={handleDelete}
        >
          Delete My Comment
        </button>
      );
    }
  };

  const addCommentBtn = () => {
    if (userVerificiationSet.has(currUserId)) {
      return null;
    } else {
      return <div>{isLogged && <CommentEditor />}</div>;
    }
  };

  const handleDelete = async (e) => {
    let commentId = e.target.id;
    // console.log(commentId);

    dispatch(deleteComment(commentId));
  };

  console.log(`USER VERIFICATION`, userVerificiationSet);

  let isLogged = false;

  if (currentUser) {
    isLogged = true;
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
          <div>{commentsButton()}</div>
          {commentsArr.map((comment) => (
            <div key={comment.id}>
              <p>{comment?.User?.username}</p>
              <p>{comment?.body}</p>
              <p>{`created: ${comment?.createdAt}`}</p>
            </div>
          ))}
        </div>
        {addCommentBtn()}
      </div>
    </>
  );
};

export default StoryDetails;
