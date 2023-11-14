import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import CategoryMenu from '../components/CategoryMenu';
import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
    const { poLoading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
      <div className="main-div">
        <div className="">
          {poLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <CategoryMenu />
              <PostList
                posts={posts}
                title="Newest Posts" />
            </>
          )}
        </div>
      </div>
    )
}

export default Home;