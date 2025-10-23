const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    //   schema: require('./schema/schema'),
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
