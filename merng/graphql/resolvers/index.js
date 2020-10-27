const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolver = require('./users');

module.exports = {
    Post: {
        likeCount(parent){
            console.log(parent)
            return parent.likes.length;
        },
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolver.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}