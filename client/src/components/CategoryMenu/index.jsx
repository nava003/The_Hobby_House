import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

function CategoryMenu() {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];

    return (
        <ul className='dropdown-content'>
            {categories.map((category) => (
                <div key={category._id} className=''>
                    {category.name}
                </div>
            ))}
        </ul>
    )
}

export default CategoryMenu;