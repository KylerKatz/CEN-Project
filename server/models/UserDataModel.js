import mongoose from 'mongoose'

const userdSchema =  new mongoose.Schema({

    //name: {type:String, required:true}, 
    email:{type:String, required:true}, 
    //probably replace achievements with {type: [mongoose.Number], required: false} and create achievement schema 
    achievements: [mongoose.Schema.Types.Mixed],
    clusters: {type: [mongoose.Number], required: false}

}); 

var UserD = mongoose.model('userdata', userdSchema); 

export default UserD;
