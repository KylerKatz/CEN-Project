import User from '../models/UserSchema.js';
import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import bcrypt from 'bcrypt';

var errors = ['Signup Errors'];

// export const validate = (req, res, next) => {
// 	if (req.body.name.lenth < 4) {
// 		errors.push('Usernames must be at least 4 characters');
// 	}
// 	if (req.body.email.length < 4) {
// 		errors.push('Please enter a valid email');
// 	}
// 	//if(req.body.password.length <= 8){errors.push("Passwords must be atleast 8 characters long")};
// 	if (req.body.conpassword != req.body.password) {
// 		alert('Passwords must match');
// 		errors.push('Passwords must match');
// 	}
// 	next();
// };

export const create = function (req, res, next) {
	// if (!(errors === undefined) || !(errors.length == 0)) {
	// 	console.log(errors);
	// 	res.send('validate', { errors: JSON.stringify(errors) });
	// 	errors = ['Signup Errors'];
	// }

	var date = new Date().getDate(); //Current Date
	var month = new Date().getMonth() + 1; //Current Month
	var year = new Date().getFullYear(); //Current Year
	date = date + '/' + month + '/' + year;

	const hashPass = bcrypt.hashSync(req.body.password, 10);

	if (!req.body.isAdmin) {
		req.body.isAdmin = false;
	}

	var addUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPass,
		isAdmin: req.body.isAdmin,
		created: date,
	});

	//save to database
	addUser.save(function (err, data) {
		if (err) throw err;
	});
	console.log(req.body.isAdmin);
	next();
};

export const update = function (req, res) {
	const hashPass = bcrypt.hashSync(req.body.password, 10);
	const hashPass2 = bcrypt.hashSync(req.body.newpassword, 10);

	if (!req.body.isAdmin) {
		res.send(false);
	} else {
		//update
		User.findOneAndUpdate(
			{ email: req.body.email, password: hashPass },
			{ $set: { password: req.body.newpassword } },
			function (err, data) {
				if (err) throw err;
				if (data) {
					console.log(req.body.newpassword, data);
					res.send(true);
				} else {
					res.send(false);
				}
			}
		);
	}
};

export const assign = function (req, res) {
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
	console.log(req.body);
	var t = req.body.isAdmin;
	res.redirect('/Login');
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
	user.find({}, function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	});
};
