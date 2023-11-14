import { Link } from "react-router-dom";
import React from "react";
// import { UPDATE_POST, REMOVE_POST } from "../../utils/actions";
import { useHobbyContext } from "../../utils/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import LikeButton from '../LikeButton';

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  const [state] = useHobbyContext();
  const { currentCategory } = state;

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  function filterPosts() {
    if (!currentCategory) {
      return state.posts;
    }

    return state.posts.filter(
      (post) => post.category._id === currentCategory
    );
  }

  return (
    <div className="">
      <div className="center">
        {showTitle && <h3 className="">{title}</h3>}
      </div>
      <div className="home-container">
        {posts &&
          filterPosts().map((post) => (
            <div key={post._id} className="card">
              <h3 className="">
                {showUsername ? (
                  <Link className="" to={`/profiles/${post.postAuthor}`}>
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
              <Link to={`/Posts/${post._id}`} ><FontAwesomeIcon icon={ faComment } style={{color : "var(--brown"}}/>
              </Link>
              <LikeButton />
              
              
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;

