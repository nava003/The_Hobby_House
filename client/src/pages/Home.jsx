import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
      <div className="main-div">
        <div className="">
          <h1 className='post-list-title'>
            Newest Posts
          </h1>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
            />
          )}
        </div>
      </div>
    )
}

export default Home;