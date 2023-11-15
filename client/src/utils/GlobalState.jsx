import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'

const HobbyContext = createContext();
const { Provider } = HobbyContext;

const HobbyProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    // cart: [],
    // cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useHobbyContext = () => useContext(HobbyContext);

export { HobbyProvider, useHobbyContext };
