import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const CreatePost = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to make a post! Follow the Toilet and/or Poop emojis to log in and sign up
      </h4>
    );
  }

  return (
    <div className="main-div">
      <div className="post-form-container">
        {!userParam && <PostForm />}
      </div>

      <div className="">
        <PostList 
        posts={user.posts} 
        title={`${user.username}'s posts...`} 
        showTitle={false}
        showUsername={false}
        />
      </div>

    </div>
  );
};

export default CreatePost;