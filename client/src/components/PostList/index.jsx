import { Link } from "react-router-dom";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="post-container">
      {showTitle && <h3>Post Feed</h3>}

      {posts &&
        posts.map((Post) => (
          <div key={Post._id} className="single-post-inform">
            <h4 className="">
              {showUsername ? (
                <span className="post-header">
                  <Link className="post-author" to={`/profiles/${Post.postAuthor}`}>
                    {Post.postAuthor}
                  </Link>{" "}
                  had this Post on {Post.createdAt}
                </span>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had this Post on {Post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="post-desc">
              <p>{Post.postDesc}</p>
            </div>
            <Link className="join-discussion" to={`/Posts/${Post._id}`}>
              Join the discussion on this Post.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
