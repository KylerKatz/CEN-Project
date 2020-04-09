import User from '../models/UserSchema.js'; 
import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import bcrypt from 'bcrypt';

var errors = ["Signup Errors"];

export const validate = (req, res, next) =>{

    
    if(req.body.name.lenth < 4){errors.push("Usernames must be at least 4 characters")}
    if(req.body.email.length<4){errors.push("Please enter a valid email");};
    if(req.body.password.length <= 8){errors.push("Passwords must be atleast 8 characters long")};
    if(req.body.conpassword != req.body.password){errors.push("Passwords mush match")};
   next();

};

    export const create = function(req, res, next){

        if(!(errors === undefined) || !(errors.length == 0)){
            console.log(errors);
            res.send('validate', {errors: JSON.stringify(errors)});
            errors = ["Signup Errors"];
        }

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        date=date + '/' + month + '/' + year;
       
    
        const hashPass = bcrypt.hashSync(req.body.password, 10);
    
        if(!req.body.isAdmin){
            req.body.isAdmin=false;
        }
    
        var addUser = new 
        User({
            name: req.body.name, 
            email: req.body.email,
            password: hashPass, 
            isAdmin: req.body.isAdmin,
            created: date
    
        });
    
        
      
        //save to database
        addUser.save(function(err, data){
            if (err) throw err; 
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
//export default userController;