import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateStory } from "../../../src/store/stories";

function EditStory() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const stories = useSelector((state) => state.stories);
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState(stories[id].imageUrl);
  const [title, setTitle] = useState(stories[id].title);
  const [body, setBody] = useState(stories[id].body);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  console.log(stories);

  const updateImageUrl = (e) => setImageUrl(e.target.value);
  const updateTitle = (e) => setTitle(e.target.value);
  const updateBody = (e) => setBody(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStory = {
      id: stories[id].id,
      authorId: sessionUser.id,
      imageUrl,
      title,
      body,
    };

    //error validation
    setErrors([]);

    const newErrors = [];

    if (updatedStory.body.length < 4) {
      newErrors.push("Story must be more than 4 characters");
    }
    if (updatedStory.title.length < 4) {
      newErrors.push("Title must be more than 4 characters");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(updateStory(updatedStory));
    history.push(`/stories/${id}`);
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    history.push(`/stories/author/${userId}`);
  };

  return (
    <section className="new-form-holder centered middled">
      <div className="Errors">
        <ul>
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      </div>
      <form className="edit-story-form" onSubmit={handleSubmit}>
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
          placeholder="New Title"
          value={title}
          onChange={updateTitle}
          required
        />
        <textarea
          type="text"
          placeholder="New Story here..."
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
}

export default EditStory;
