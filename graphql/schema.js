import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
var graphqlSchema = buildSchema(`
  type TestData {
    text: String!
    views: Int!
  }

  type RootQuery {
    hello: TestData!
  }

  schema {
    query: RootQuery
  }
`);

export { graphqlSchema };
