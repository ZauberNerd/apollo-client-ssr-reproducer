import path from 'path';
import express from 'express';

import { render } from './index-server';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', async (_, res) => {
  const [content, apolloState] = await render();
  res.end(`<!doctype html><script async defer src="/bundle-client.js"></script><main>${content}</main><script>window.__APOLLO_STATE__ = ${apolloState}</script>`);
});

app.post('/graphql', (_, res) => {
  res.json({
    data: { foo: 'bar' },
    errors: [
      {
        message: 'Could not resolve fields',
        path: ['bar'],
        locations: [
          {
            line: '3',
            column: '3',
          },
        ],
        id: 'RESOLVE_ERROR',
        details: {},
      },
    ],
  });
});

app.listen(3000, () => {
  console.log('Application listening at http://localhost:3000');
});