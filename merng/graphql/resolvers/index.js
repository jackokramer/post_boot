const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const postsResolver = require('./posts');
const commentsResolver = require('./users');

module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolver.Mutation
    }
}