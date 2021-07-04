const graphql= require('graphql');
const _ = require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLInt}=graphql;

const users = [
    {"id": "23", "firstName": "John", "age": 25, "gender": "male"},
    {"id": "47", "firstName": "Ruth", "age": 21, "gender": "female"},
    {"id": "13", "firstName": "Faith", "age": 15, "gender": "female"},
    {"id": "76", "firstName": "Emmanuel", "age": 14, "gender": "male"}
];

const UserType = new GraphQLObjectType({
    name:'User',
    fields:{
        id:{type:GraphQLString},
        firstName:{type:GraphQLString},
        age:{type:GraphQLInt},
        gender:{type:GraphQLString}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{id:{type:GraphQLString}},
            resolve(parent, args){
                return _.find(users, {id:args.id});
            }
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
});