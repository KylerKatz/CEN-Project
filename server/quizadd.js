'use strict';

import * as fs from 'fs';
import mongoose from 'mongoose';
import quiz from './models/QuizModel.js';
import config from './config/config.js';
import async from 'async';


export const clearAndRefill = () => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`established connection to db at uri: ${config.db.uri}!`);
	
    quiz.deleteMany({}, (err) => {
        if (err){
			console.log("error", err);
			throw err;
		}
    });
	console.log("cleaning");
	
    fs.readFile('questions.json', 'utf8', (err, data) => {
        if (err) throw err;
        let quizData = JSON.parse(data);
		console.log("writing");
		console.log(data);
		var iloveiterators=quizData.questions.length;
		for(var i = 0; i < iloveiterators; i++){
			console.log(quizData.questions[i]);
			var clu = new quiz(quizData.questions[i]);
			console.log("Quiz: ", clu);
			clu.save(function(err) {
				if(err) throw err;
			});
		
	}
    })
	//mongoose.connection.close();
};

clearAndRefill();