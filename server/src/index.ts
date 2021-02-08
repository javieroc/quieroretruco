import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

const main = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    })
  });

  apolloServer.applyMiddleware({ app });

  app.listen(3001, () => {
    console.log('Server running on localhost:3001');
  });
}

main().catch((error) => {
  console.log(error);
});
