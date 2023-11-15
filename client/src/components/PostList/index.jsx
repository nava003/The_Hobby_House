import { Link } from "react-router-dom";
import React, { useParams } from "react";
// import { UPDATE_POST, REMOVE_POST } from "../../utils/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import LikeButton from "../LikeButton";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="main-div">
      <div className="center">{showTitle && <h3 className="">{title}</h3>}</div>
      <div className="home-container">
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="card">
              <h3 className="">
                {showUsername ? (
                  <Link className="profile-name" to={`/profiles/${post.postAuthor}`}>
                    {post.postAuthor} <br />
                  </Link>
                ) : (
                  <>
                    {/* <span style={{ fontSize: "1rem" }}>
                    You made this post on {post.createdAt}
                  </span> */}
                  </>
                )}
              </h3>

              <div className="description">
                <p>{post.postDesc}</p>
              </div>
              {/* <CommentList comments={post.comments} /> */}
              {/* <div>
                <ul>
                  {post.comments.map((comment) => (
                    <li key={comment._id}>
                      <h4>{comment.commentAuthor}</h4>
                      <p>{comment.commentText}</p>
                    </li>
                  ))}
                </ul>
              </div> */}

              <small>{post.createdAt}</small>

              <hr />
              <div className="comments-likes-container">
                <Link to={`/Posts/${post._id}`}>
                  <FontAwesomeIcon
                    icon={faComment}
                    size="lg"
                    style={{ color: "var(--brown" }}
                  />
                </Link>
                
                <LikeButton />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
