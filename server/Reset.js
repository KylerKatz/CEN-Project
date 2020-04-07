'use strict';

import * as fs from 'fs';
import mongoose from 'mongoose';
import cluster from './models/UserSchema.js';
import config from './config/config.js';
import async from 'async';


export const clearAndRefill = () => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`established connection to db at uri: ${config.db.uri}!`);
	
    cluster.deleteMany({}, (err) => {
        if (err){
			console.log("error", err);
			throw err;
		}
    });
	console.log("cleaning");
	
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) throw err;
        let clusterData = JSON.parse(data);
		console.log("writing");
		console.log(data);
		/*
        async.forEach(clusterData.entries, (doc, callback) => {
            cluster.create(doc, (err) => {
                if (err) throw err;
                callback();
            });
        }, () => {
            //mongoose.connection.close();
        });
		*/
		var iloveiterators=clusterData.users.length;
		for(var i = 0; i < iloveiterators; i++){
			//console.log(clusterData.Clusters[i]);
			var clu = cluster(clusterData.users[i]);
			clu.save(function(err) {
				if(err) throw err;
			});
		
	}
    })
	//mongoose.connection.close();
};

clearAndRefill();