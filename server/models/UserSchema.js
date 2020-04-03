import mongoose from 'mongoose'

export const userSchema =  new mongoose.Schema({

    name: {type:String, required:true}, 
    email:{type:String, required:true}, 
    password:{type:String, required:true}, 
    isAdmin: {type:Boolean, required:true}, 

}); 

var User = mongoose.model('users', userSchema); 

export default User;
