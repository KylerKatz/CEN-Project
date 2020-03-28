import User from '../models/UserSchema.js'; 
import mongoose from 'mongoose';
import path from 'path';
import express from 'express';

export const create = function(req, res, next){

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
        
    }); 
    console.log(req.body.isAdmin);
    next();
    

    

};

export const redir = function(req, res){
    console.log("Redirect: ", req.body.isAdmin);
    console.log(req.body);
    var t=req.body.isAdmin;
    //User.find({email})

    if(t==='false'){
         res.redirect('/Explore');
         
	}
    else{
         res.redirect('/Admin-Dashboard');
         
	}

}
//const check = 

//export default userController;