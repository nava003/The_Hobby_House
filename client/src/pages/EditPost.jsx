import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_SINGLE_POST } from "../utils/queries";
import EditForm from "../components/EditForm";

const EditPost = () => {
  const { postId } = useParams();
  

  const { data: userData } = useQuery(QUERY_ME);
  const user = userData?.me;

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { id: postId },
  });
  
  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to edit a post! Follow the Toilet and/or Poop emojis to log in and sign up
      </h4>
    );
  }

  return (
    <div className="main-div">
      <div className="post-form-container">
        <EditForm postId={postId} />
      </div>
    </div>
  );
};

export default EditPost;
