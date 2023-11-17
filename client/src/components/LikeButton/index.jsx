import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/client";
import { ADD_LIKE } from "../../utils/mutations";

const LikeButton = ({ postId, initialLikes }) => {
  const likesCount = initialLikes || 0;

  const [likes, setLikes] = useState(likesCount);
  const [liked, setLiked] = useState(false);

  const [addLike, { error, data }] = useMutation(ADD_LIKE);

  const likePost = async () => {
    try {
      const { data } = await addLike({ variables: { postId } });
      if (data && data.likePost && data.likePost.likes) {
        setLikes(data.likePost.likes);
        setLiked(true);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="likes-container">
      <p>
        {likes}{" "}
        <FontAwesomeIcon
          icon={faHeart}
          size="lg"
          style={liked ? { color: "FF0000" } : { color: "var(--brown)" }}
          onClick={liked ? null : likePost}
        />
      </p>
    </div>
  );
};


export default LikeButton;