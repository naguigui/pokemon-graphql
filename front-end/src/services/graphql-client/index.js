import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import httpLink from "./http.link";

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
