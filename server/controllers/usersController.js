import User from '../models/UserSchema.js';
import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import bcrypt from 'bcrypt';
import Userd from '../models/UserDataModel.js';


export const create = function (req, res, next) {
	if(req.body.password!=req.body.conpassword){
		console.log('redirect, bad passwords');
		return res.redirect('/SignupFailed2');
	}
	else{
		console.log('passwords match');
	}
	if (!req.body.isAdmin) {
		req.body.isAdmin = false;
	}
	res.suc=null;
	User.findOne({email:req.body.email}).exec(function (err, user) {
            if(err) {return done(err);}

            
            if (!user) {
                console.log('Unique Email');
				res.suc=true;
            }
			else{
				console.log('Email is taken');
				res.suc=false;
				
			}
			return next();
	});

};

export const savef = function (req, res, next){
	var date = new Date().getDate(); //Current Date
	var month = new Date().getMonth() + 1; //Current Month
	var year = new Date().getFullYear(); //Current Year
	date = date + '/' + month + '/' + year;

	const hashPass = bcrypt.hashSync(req.body.password, 10);
	var addUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPass,
		isAdmin: req.body.isAdmin,
		created: date,
		achievementPoints: 0,
		achievements: [],
		savedClusters: []
	});

	//save to database
	addUser.save(function (err, data) {
		if (err) throw err;
	});
	console.log("creating a user with perms: ", req.body.isAdmin);
	if(res.suc==null){
		console.log("res.suc is null");
	}
	return next();
};

export const update = function (req, res) {
	const hashPass = req.body.password;
	const hashPass2 = bcrypt.hashSync(req.body.newpassword, 10);

	if (!req.body.isAdmin) {
		res.send(false);
	} else {
		//update
		User.findOneAndUpdate(
			{ email: req.body.email, password: hashPass },
			{ $set: { password: hashPass2 } },
			function (err, data) {
				if (err) throw err;
				if (data) {
					console.log(hashPass2, data);
					res.send(true);
				} else {
					res.send(false);
				}
			}
		);
	}
};

export const assign = function (req, res) {

	console.log(req.body)
	if (!req.body.isAdmin) {
		res.send(false);
	} else {
		//update
		User.findOneAndUpdate(
			{ email: req.body.email },
			{ $set: { teacher: req.body.teacher } },
			function (err, data) {
				if (err) throw err;
				if (data) {
					console.log(req.body.teacher, data);
					res.send(true);
				} else {
					res.send(false);
				}
			}
		);
	}
};

export const saveCluster = (req,res) =>{
	//is an array
	//find clusterbyidandthensave

	var saveCluster = req.body.cluster;
	console.log("completed");
/*
	Users.findOneAndUpdate({name: req.user.name}, 
		{$push: {friends: friend}});
};*/
	Userd.findOneAndUpdate({email:req.body.email},
							{$push:{clusters: saveCluster}},

		(err,data)=>{
			if (err) console.log("error");
			else{
				console.log(saveCluster);
				res.send(data); 
			}
		});
};

export const updatePoints = function (req, res) {

	console.log(req.body)
	
		User.findOneAndUpdate(
			{ email: req.body.email },
			{ $set: { achievementPoints: req.body.points } },
			function (err, data) {
				if (err) throw err;
				if (data) {
					console.log(req.body.points, data);
					res.send(true);
				} else {
					res.send(false);
				}
			}
		);
};


export const deleteu = function (req, res) {
	if (!req.body.isAdmin) {
		res.send(false);
	} else {
		//update
		User.deleteOne({ email: req.body.email }, function (err, data) {
			if (err) throw err;
			if (data) {
				console.log(data);
				res.send(true);
			} else {
				res.send(false);
			}
		});
	}
};

export const redir = function (req, res) {
	console.log('Redirect: ', req.body.isAdmin);
	console.log(req.body, req.suc);
	var t = res.suc;
	
	if(t){
		res.suc=null;
		res.redirect('/Login');
	}
	else{
		res.suc=null;
		res.redirect('/SignupFailed');
	}
};

export const redir2 = function (req, res) {
	console.log('Redirect: ', req.body.isAdmin);
	console.log(req.body);
	var t = req.body.isAdmin;
	res.redirect('back');
	//readd this after passport autologins after signup
	/*
    if(t==='false'){
         res.redirect('/Explore');
         
	}
    else{
         res.redirect('/Admin-Dashboard');
         
	}*/
};

export const list = (req, res) => {
	User.find({}, function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	});
};
