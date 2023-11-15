import { Link } from "react-router-dom";
import React, { useParams } from "react";
// import { UPDATE_POST, REMOVE_POST } from "../../utils/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import LikeButton from "../LikeButton";
import DeleteButton from "../DeleteButton";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  const { data } = useQuery(QUERY_ME);
  const userId = data?.me?.username;

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
                {Post.postAuthor === userId && (
                  <Link to={`/edit-post/${Post._id}`}>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      size="lg"
                      style={{ color: "var(--brown" }}
                    />
                  </Link>
                )}
                {Post.postAuthor === userId && (
                  <DeleteButton postId={Post._id}/>
                )}

                <LikeButton postId={Post._id} initialLikes={Post.likes} />
                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
