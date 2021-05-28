const graphql = require('graphql');
const { GraphQLString, GraphQLObjectType } = graphql;
const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, request) {
                return AuthService.signup({
                    email,
                    password,
                    req: request
                })
            }
        }
    }
});
