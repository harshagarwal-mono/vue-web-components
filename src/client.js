import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'

function getHeaders(existingHeaders) {
  const headers = {
    ...existingHeaders,
    'Content-Type': 'application/json',
  }
  const token = window.localStorage.getItem('apollo-token')
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return headers
}

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://graphqlzero.almansi.me/api',
  fetch: (uri, options) => {
    options.headers = getHeaders(options.headers || {})
    return fetch(uri, options)
  },
})

const errorLink = onError((error) => {
  console.error(error)
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink),
})

export default apolloClient
