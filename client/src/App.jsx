import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";

import Nav from "./components/Nav";

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
            <div className="outlet">
                <Outlet />
            </div>
        </ApolloProvider>
    );
}

export default App;