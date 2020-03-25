import User from '../models/UserSchema.js'; 
import mongoose from 'mongoose';
import path from 'path';

const create = function(req, res){

    //validate fields 

    var addUser = new 
    User({
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password, 
        isAdmin: req.body.isAdmin
    });

    //save to database
    addUser.save(function(err, data){
        if (err) throw err; 
        //console.log("user created");
        //res.send(data);
        console.log(path.join(path.resolve(), './client/build/Explore.html'));
        if(!req.body.isAdmin){
            res.redirect('/Explore');
		}
        else{
            res.redirect('/Admin-Dashboard');
		}
    }); 


};

//const check = 

export default create;