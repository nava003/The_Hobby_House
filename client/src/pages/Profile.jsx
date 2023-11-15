import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().authenticatedPerson.username === userParam) {
    return <Navigate to="/me" replace={true} />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links on the left to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="main-div">
      <div className="">
        <h2 className="viewingMessage">
          Viewing {userParam ? `${user.username}'s` : "Your"} Profile
        </h2>
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

export default Profile;