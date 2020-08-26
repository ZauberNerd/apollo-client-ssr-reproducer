import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from '@apollo/client/core';
import { ApolloProvider } from '@apollo/client/react/context';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpLink } from '@apollo/client/link/http';

import { App } from './app';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql', fetch }),
  // remove the "possibleTypes" parameter
  cache: new InMemoryCache({ possibleTypes: {} }).restore((window as any).__APOLLO_STATE__),
});

ReactDOM.hydrate((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), document.querySelector('main'));

