import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIllusion } from "../../store/illusions";
import { useHistory, useParams } from "react-router-dom";

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

    const updatedIllusion = {
      id: illusion.id,
      userId: sessionUser.id,
      title,
      description,
    };

    dispatch(updateIllusion(updatedIllusion));
    history.push("/explore/:");
  };

  return (
    <section className="new-form-holder centered middled">
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
  );
}

export default EditIllusion;
