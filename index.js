import express from 'express'
const app = express();
import dotenv from 'dotenv';
import typeDefs from './Schema/TypeDefs.js';
import resolvers from './Schema/Resolver.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
dotenv.config();
//get method 
//graphql server
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 9000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
//express server

app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running on port ${process.env.PORT||5000}`)
});

