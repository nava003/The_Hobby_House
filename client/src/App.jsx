import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
    useQuery,
} from "@apollo/client";

import Nav from "./components/Nav";
import { HobbyProvider } from "./utils/GlobalState";
// import Footer from "./components/Footer";

import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";

const httpLink = createHttpLink({
    uri: "/graphql"
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Nav />
            <HobbyProvider>
                <div className="outlet">
                    <Outlet />
                </div>
            </HobbyProvider>
        </ApolloProvider>
    );
}

export default App;