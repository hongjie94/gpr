"use client"

import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

export const ApolloProvider = ({children}: {children: React.ReactNode}) => {
  const originUrl = window.location.origin;
  const client = new ApolloClient({
    uri: `${originUrl}/api/graphql/`,
    cache: new InMemoryCache(),
  });
  return (
      <Provider client={client}>
        {children}
      </Provider>
  )
}
