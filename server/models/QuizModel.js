import mongoose from 'mongoose'

const quizSchema =  new mongoose.Schema({

    question: {type:String, required:true}, 
    options:{type:[String], required:true}, 
    answer: {type:mongoose.Number, required:true},
    aux: {type:String, required:false}

}); 

var quizzes = mongoose.model('quizzes', userSchema); 

export default quizzes;
