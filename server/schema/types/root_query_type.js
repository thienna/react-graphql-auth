const { GraphQLString, GraphQLID } = require('graphql');
const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: {
      type: GraphQLID
    }
  }
});

module.exports = RootQueryType;
