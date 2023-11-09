import { useQuery } from '@apollo/client';
import { PostList } from '../components/PostList/index.jsx';
import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
        <div className='container'>
            <PostList />
        </div>
    )
}

export default Home;