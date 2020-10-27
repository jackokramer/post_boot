const {AuthenticateionError } = require('apollo-server')

const jwt = require('jsonwebtoken');

const {SECRET_KEY}= require('../config')

module.exports = (context)=>{
    // context ={...headers}
    const authHeader = context.request.headers.authorization;
    if(authHeader){
        //bearar ...
        const token = authHeader.split('Bearer ')[1];
        if(token){
            try{
                const user = jwt.verify(token, SECRET_KEY);
                return user
            } catch(err){
                throw new AuthenticateionError('Invalid/Expired token');
            }
        }
        throw new Error('Authentication token must be \'Bearer [token]')
    }
    throw new Error('Authentication header must be provided');
}