"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: `https://main.d1w7480w3jclmw.amplifyapp.com/api/graphql?_rsc=acgkz`,
    cache: new InMemoryCache(),
  });
  return <Provider client={client}>{children}</Provider>;
};
