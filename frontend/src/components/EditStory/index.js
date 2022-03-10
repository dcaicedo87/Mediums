import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function EditStory() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const stories = useSelector((state) => state.stories);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStory = {
      id: story[storyId].id,
      authorId: sessionUser.id,
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

    dispatch(updatedStory(updatedStory));
    history.push("/stories/:id");
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
}

export default EditIllusion;
