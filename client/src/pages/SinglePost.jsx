import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

import { QUERY_SINGLE_POST } from "../utils/queries";

const SinglePost = () => {
    const thoughtId = useParams();

    const {loading, data} = useQuery(QUERY_SINGLE_POST, {
        variables: {thoughtId: thoughtId}
    });

    const thought = data?.thought || {};

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className="card mb-3">
                <p className="card-header">
                    <span style={{fontStyle: "italic", fontWeight: "bold"}}>
                        Posted by {thought.username}
                    </span>{" "}
                    on {thought.createdAt}
                </p>
                <div className="card-body">
                    <p>{thought.thoughtText}</p>
                </div>
            </div>
            {thought.commentCount > 0 && <CommentList comments={thought.comments} />}
            <CommentForm thoughtId={thought._id} />
        </div>
    )
}

export default SinglePost;
