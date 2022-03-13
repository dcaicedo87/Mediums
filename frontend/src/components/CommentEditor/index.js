import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import { getStories, postStory } from "../../store/stories";
import { postComment } from "../../store/comments";
import "./commenteditor.css";

const CommentEditor = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  console.log(`USER:`, user);
  const history = useHistory();

  // /stories/:id (in url)
  const { id } = useParams();

  const userId = user.id;

  //   if (!userId) return null;

  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const updateBody = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: userId,
      storyId: id,
      body,
    };

    //error validation
    setErrors([]);

    const newErrors = [];

    if (payload.body.length < 4) {
      newErrors.push("Comment must be more than 4 characters");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(postComment(payload));
    history.push(`/stories/${id}`);
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    history.push(`/stories/${id}`);
  };

  if (!userId) return null;
  //NEED TO ADD "onSubmit={function}" for <form> line

  return (
    <section className="new-comment-container">
      <div className="errors">
        <ul>
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      </div>
      <form className="create-comment-form" onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Comment here..."
          value={body}
          onChange={updateBody}
        />
        <button className="create-comment-btn" type="submit">
          Create Comment
        </button>
      </form>
    </section>
  );
};

export default CommentEditor;
