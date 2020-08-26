import React from 'react';
import { useQuery } from '@apollo/client/react/hooks';
import { gql } from '@apollo/client/core';

const QUERY = gql`
  {
    foo
    bar
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(QUERY, {
    errorPolicy: 'all',
  });

  console.log({ loading, error, data });

  if (loading) return <span>loading...</span>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
};