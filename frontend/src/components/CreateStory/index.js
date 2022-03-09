import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { handleValidationErrors } from "../../../../backend/utils/validation";
import { getStories, postStory } from "../../store/stories";

const CreateStory = (stories) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  const userId = user.id;

  // useEffect(() => {
  //   dispatch(getUserStories(userId));
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getStories());
  // }, [dispatch]);

  // if (!userId) return null;

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const updateImageUrl = (e) => setImageUrl(e.target.value);
  const updateTitle = (e) => setTitle(e.target.value);
  const updateBody = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      authorId: userId,
      imageUrl,
      title,
      body,
    };

    //error validation
    setErrors([]);

    const newErrors = [];

    if (payload.body.length < 4) {
      newErrors.push("Story must be more than 4 characters");
    }
    if (payload.title.length < 4) {
      newErrors.push("Title must be more than 4 characters");
    }

    if (newErrors.lenght > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(postStory(payload));
    history.push(`/stories/author/${userId}`);
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    history.push(`/stories/author/${userId}`);
  };

  //NEED TO ADD "onSubmit={function}" for <form> line

  return (
    <section className="new-form-holder centered middled">
      <div className="Errors">
        <ul>
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      </div>
      <form className="create-pokemon-form" onSubmit={handleSubmit}>
        {/* Author ID */}
        <input type="hidden" value={userId} />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={updateImageUrl}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={updateTitle}
          required
        />
        <textarea
          type="text"
          placeholder="Story start.."
          value={body}
          onChange={updateBody}
        />
        <button type="submit">Create New Story</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </section>
  );
};

export default CreateStory;
