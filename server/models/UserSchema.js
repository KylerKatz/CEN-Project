import mongoose from 'mongoose'

const userSchema =  new mongoose.Schema({

    name: {type:String, required:true}, 
    email:{type:String, required:true}, 
    password:{type:String, required:true}, 
    isAdmin: {type:Boolean, required:true},
    created: {type:String, required: true},
    teacher: {type:String, required:false},
    achievementPoints: {type: mongoose.Number, required: false},
    achievements: [String],
    savedClusters: [mongoose.Number]

}); 

var User = mongoose.model('users', userSchema); 

export default User;
