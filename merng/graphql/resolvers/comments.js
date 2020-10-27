const {UserInputError} = require('apollo-server')

const checkAuth = require('../../util/check-auth')
const Post = require('../../models/Post');


module.exports = {
    Mutation: {
        createComment: async(_, {postId, body}, context) =>{
            const {username} = checkAuth(context);
            if(body.trim()===''){
                throw new UserInputError('Empty Comment', {
                    errrors: {
                    body: 'Comment body must not be empty;'
                    }
                })
            }
            const post = Post.findById(postId);
            if(post){
                post.comments.unshift({
                    body, 
                    username,
                    createdAt: new Date().toISOString()
                })
                await (await post).save();
                return post;
            } else {
                throw new UserInputError('Post not found')
            }
        },
        async deleteComment
    }
}