import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { renderToStringWithData } from "@apollo/client/react/ssr";
import fetch from 'cross-fetch';

import { App } from './app';

export async function render() {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({ uri: 'http://localhost:3000/graphql', fetch }),
    // remove the "possibleTypes" parameter
    cache: new InMemoryCache(),
  });

  const content = await renderToStringWithData(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const apolloState = client.extract();

  return [content, JSON.stringify(apolloState)];
}