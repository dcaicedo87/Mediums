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
  // console.log(`commentOBJ`, commentsObj);

  const commentsArr = Object.values(commentsObj);
  // console.log(`commentsArr`, commentsArr);

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
          className="delete-comment-button"
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

  // console.log(`USER VERIFICATION`, userVerificiationSet);

  let isLogged = false;

  if (currentUser) {
    isLogged = true;
  }

  return (
    <>
      <div className="story-details-container">
        <div className="story-details-img-container">
          {storySearch ? (
            <img
              className="story-details-img"
              src={`${storySearch.imageUrl}`}
              alt="storyPic"
            />
          ) : null}
        </div>
        {storySearch ? (
          <h1 className="story-details-title">{storySearch.title}</h1>
        ) : null}
        {storySearch ? (
          <p className="story-details-body">{storySearch.body}</p>
        ) : null}
        <div className="comment-container">
          <div>{commentsButton()}</div>
          {commentsArr.map((comment) => (
            <div className="comment-container-info" key={comment.id}>
              <p className="comment-container-info-username">
                {comment?.User?.username}
              </p>
              <p className="comment-container-info-body">{comment?.body}</p>
              {/* <p className="comment-container-info-created">{`Created: ${comment?.createdAt}`}</p> */}
            </div>
          ))}
        </div>
        <div className="comment-editor-container">{addCommentBtn()}</div>
      </div>
    </>
  );
};

export default StoryDetails;
