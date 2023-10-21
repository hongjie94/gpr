"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: `api/graphql/`,
    cache: new InMemoryCache(),
  });
  return <Provider client={client}>{children}</Provider>;
};
