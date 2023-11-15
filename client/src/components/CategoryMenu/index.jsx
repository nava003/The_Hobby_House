import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
function CategoryMenu() {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    console.log(data);

}

export default CategoryMenu;