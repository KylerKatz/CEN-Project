import User from '../models/UserSchema.js'; 
import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import bcrypt from 'bcrypt';

export const create = function(req, res, next){

    var date = new Date().getDate(); //Current Date
	var month = new Date().getMonth() + 1; //Current Month
	var year = new Date().getFullYear(); //Current Year
	date=date + '/' + month + '/' + year;


    const hashPass = bcrypt.hashSync(req.body.password, 10);

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