const {AuthenticateionError } = require('apollo-server')


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
        }
    }
}