import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import { persistCache } from 'apollo-cache-persist'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import Dashboard from './pages/dashboard/Dashboard';

import './index.css';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();

persistCache({
    cache,
    storage: localStorage
})

if (localStorage['apollo-cache-persist']) {
    let cacheData = JSON.parse(localStorage['apollo-cache-persist'])
    cache.restore(cacheData)
}

const client = new ApolloClient({ 
  cache,
  uri: 'https://aclive-dee69.appspot.com/graphql', 
  request: operation => {
    operation.setContext(context => ({
      headers: {
          ...context.headers,
          authorization: localStorage.getItem('token')
      }
    }))
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Dashboard />
  </ApolloProvider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
