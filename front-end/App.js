import React from "react";
import { View, Text } from "react-native";
import { Font } from "expo";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import { ApplicationContainer } from "./src/containers";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApplicationContainer />
      </ApolloProvider>
    );
  }
}
