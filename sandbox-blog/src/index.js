import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'
import App from './App';
import * as serviceWorker from './serviceWorker';
const API = 'http://localhost:4000/graphql';
const client = new ApolloClient({
 link: new HttpLink({ uri: API }),
 cache: new InMemoryCache()
});
ReactDOM.render(
 <ApolloProvider client={client}>
  <App />
 </ApolloProvider>,
document.getElementById('root'));
serviceWorker.unregister();
