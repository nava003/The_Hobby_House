import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_POST } from "../../utils/mutations";
import { QUERY_SINGLE_POST } from "../../utils/queries";

const EditForm = ({ postId }) => {
  const [editPost, { error }] = useMutation(EDIT_POST);
  const [postDesc, setPostDesc] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId },
  });

  useEffect(() => {
    if (data?.post) {
      setPostDesc(data.post.postDesc);
      setCharacterCount(data.post.postDesc.length);
    }
  }, [data]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (characterCount > 0 && characterCount <= 280) {
      try {
        await editPost({
          variables: {
            postId,
            postDesc,
          },
        });

        setPostDesc("");
        setCharacterCount(0);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setPostDesc(value);
    setCharacterCount(value.length);
  };

  return (
    <form className="post-form-inside" onSubmit={handleFormSubmit}>
      <h3 className="post-form-title">Edit Your Post Bellow</h3>
      <p className="post-character-counter">Character Count: {characterCount}</p>
      <textarea className="form-input" name="postDesc" value={postDesc} onChange={handleChange} />
      <button className="submit-button" type="submit">Update Post</button>
    </form>
  );
};

export default EditForm;