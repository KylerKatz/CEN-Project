import User from '../models/UserSchema.js'; 
import mongoose from 'mongoose';

const create = function(req, res){

    //validate fields 

    //instantiate a User 

    //console.log("made it here");
    //console.log(req.body);
    //console.log(req.body.isAdmin);
    var addUser = new 
    User({
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password, 
        //conpassword: req.body.conpassword, 
        isAdmin: req.body.isAdmin
    });

    //save to database
    addUser.save(function(err, data){
        if (err) throw err; 
        //console.log("user created");
        res.send(data);
    }); 


};

//const check = 

export default create;