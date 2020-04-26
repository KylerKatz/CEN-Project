import mongoose from 'mongoose'

const imageSchema =  new mongoose.Schema({

    name: {type:String, required:true}, 
    id: {type:mongoose.Number, required:true}, 
    path : {type:String, required:true}, 

}); 

var icon = mongoose.model('icons', imageSchema); 

export default icon;
