import User from '../models/UserSchema.js'; 
import mongoose from 'mongoose';

export const post = function(req, res){

    //validate fields 

    //instantiate a User 

    console.log("made it here");
    var addUser = User({
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password, 
        conpassword: req.body.conpassword, 
        isAdmin: req.body.isAdmin
    });

    //save to database
    addUser.save(function(err, data){
        if (err) throw err; 
        console.log("user created");
        res.status(200).send(data);
    }); 


};
