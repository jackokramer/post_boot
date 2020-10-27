const {AuthenticateionError, UserInputError } = require('apollo-server')


const Post = require('../../models/Post')
const checkAuth = require('../../util/check-auth')

module.exports = {
         Query: {
         async getPosts () {
            try{
                const post = await Post.find().sort({createdAt: -1});
                return postMessage;
            } catch(err){
                throw new Error(err);
            }
         },
         async getPost(_, {postId}){
             try{
                 const post = await Post.findById(postId);
                 if(post){
                    return post;
                 } else{
                     throw new Error('Post not found')
                 }
             } catch(err){
                 throw new Error(err)
             }
         }         
     },
        Mutation: {
            async createPost(_, {body}, context){
                const user = checkAuth(context);
                console.log(user)

                const newPost = new Post({
                    body,
                    user: user.id,
                    username: user.username,
                    createdAt: new Date().toISOString()
                });
                const post = await newPost.save();

                context.pubsub.publish('NEW_POST', {
                    newPost: post
                })

                return post
        },
        async deletePost(_, {postId}, context){
            const user = checkAuth(context);
            try{
                const post = await Post.findById(postId);
                    if(user.username === post.username){
                        await post.delete();
                        return 'post deleted successfully';
                    } else{
                        throw new AuthenticateionError('action not allowed')
                    }
            } catch(err){
                throw new Error(err);
            }
        },
        async likePost(_, {postId}, context){
            const {username} = checkAuth(context);

            const post =await Post.findById(postId);
            if(post){
                if(post.likes.find(like=> like.username)){
                    // post already likes, unlike it
                    post.likes = post.likes.filter(like => like.username !== username);
                    await post.save();
                } else {
                    //not liked
                    post.likes.push({
                        username, 
                        createdAt: new Date().toISOString()
                    })
                }
                await post.save();
                return post
            } else  throw new UserInputError('Post not found, Bad data')
        }
    },
    Subscription:{
        newPost : {
            subscribe: (_, __, {pubsub}) => pubsub.asyncIterator('NEW_POST')
        }
    }
}