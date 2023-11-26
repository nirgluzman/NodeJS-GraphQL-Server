// provide a resolver function for each API endpoint.
// the resolver returns all data.
const graphqlResolver = {
  hello() {
    return {
      text: 'Hello World!',
      views: 123,
    };
  },
};

export { graphqlResolver };
