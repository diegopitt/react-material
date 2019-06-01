const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  scalar DateTime
  type City {
    name: String!
		connections: [Connection!]!
  }
  type Connection {
    distance: Int!
    to: City!
  }
  type Query {
    allCities: [City!]!
  }
`;

var distances = [
  { from: 'Tahoe City', to: 'Nevada City', distance: 65 },
  { from: 'Nevada City', to: 'Redwood Valley', distance: 151 },
  { from: 'Redwood Valley', to: 'Willits', distance: 16 },
  { from: 'Willits', to: 'Garberville', distance: 68 },
  { from: 'Garberville', to: 'Shelter Cove', distance: 24 },
  { from: 'Garberville', to: 'Mendocino', distance: 76 },
  { from: 'Mendocino', to: 'Redwood Valley', distance: 51 }
]

const resolvers = {
  Query: {
    allCities: () => {
      var cities = new Set()
      distances.forEach(d => {
        cities.add(d.from)
        cities.add(d.to)
      })
    	return Array.from(cities).map(name => ({name: name}))
    }
  },
  City: {
    connections: ({name}) => distances.reduce((results, {to,from,distance}) => {
        if (from === name) {
          results.push({ distance, to: { name: to } })
        } else if (to === name) {
          results.push({ distance, to: { name: from }})
        }
        return results
    }, [])
  }
}


const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);