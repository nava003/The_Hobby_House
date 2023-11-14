import { useHobbyContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

function CategoryMenu() {
    const [state, dispatch] = useHobbyContext();
    const { categories } = state;

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
    };

    return (
        <div>
            <h2>Choose A Category:</h2>
            {categories.map((cName) => (
                <button
                    key={cName._id}
                    onClick={() => {
                        handleClick(cName._id);
                    }}
                >
                    {cName.name}
                </button>
            ))}
            <button
                onClick={() => {
                    handleClick('');
                }}
            >
                All
            </button>
        </div>
    );
}

export default CategoryMenu;