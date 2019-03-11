import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./src/services/graphql-client";
import { ApplicationContainer } from "./src/containers";
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApplicationContainer />
      </ApolloProvider>
    );
  }
}
