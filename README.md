# `@apollo/client` SSR errors with `possibleTypes`

Steps to reproduce:
* clone this repository
* install dependencies `yarn install`
* execute `yarn start`
* open http://localhost:3000 and see the server crash with an "Invariant violation"

Next:
* open `src/index-server.tsx` and remove the `possibleTypes` parameter from the `InMemoryCache` constructor
* execute `yarn start` again
* open http://localhost:3000 and see the apollo error being rendered