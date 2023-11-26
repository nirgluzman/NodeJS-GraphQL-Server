import express from 'express';
import 'colors';

import feedRoutes from './routes/feed.js';

import { graphqlHTTP } from 'express-graphql';
import { graphqlSchema } from './graphql/schema.js';
import { graphqlResolver } from './graphql/resolvers.js';

const PORT = process.env.PORT || 3000;

const app = express();

// middleware to parse incoming requests with JSON payloads.
app.use(express.json());

// middleware to allow cross-origin requests.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // specify which HTTP headers are allowed to be sent along with CORS to a server.
  next();
});

// middleware to handle REST requests.
app.use('/feed', feedRoutes);

// middleware to handle GraphQL requests.
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`.red);
});
