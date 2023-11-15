import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/client";
import { REMOVE_POST } from "../../utils/mutations";
// import { QUERY_POSTS } from "../../utils/queries";

const DeleteButton = ({ postId }) => {

    const [removePost, { error, data }] = useMutation(REMOVE_POST);

    const deletePost = async () => {
        try {
            await removePost({
                variables: { postId } 
            });
        } catch (error){
            console.error(error);
        }
    };
  

  return (
    <div className="likes-container">
      <p>
        <FontAwesomeIcon
          icon={faTrash}
          size="lg"
          style={{ color: "var(--brown" }}
          onClick={deletePost}
        />
      </p>
    </div>
  );
};

export default DeleteButton;
