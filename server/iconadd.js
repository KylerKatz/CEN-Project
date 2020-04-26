'use strict';

import * as fs from 'fs';
import mongoose from 'mongoose';
import cluster from './models/ClusterModel.js';
import config from './config/config.js';
import async from 'async';


export const clearAndRefill = () => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`established connection to db at uri: ${config.db.uri}!`);
	
    fs.readFile('icons.json', 'utf8', (err, data) => {
        if (err) throw err;
        let clusterData = JSON.parse(data);
		console.log("writing");
		//console.log(data);
		var iloveiterators=clusterData.icons.length;
		for(var i = 0; i < iloveiterators; i++){
			
			var icon = clusterData.icons[i];
			console.log("icon: ", i);
			cluster.findOneAndUpdate({ id: i},
			{ $set: { icon: icon } }, function(err) {
				if(err) throw err;
			});
		
	}
    })
	//mongoose.connection.close();
};

clearAndRefill();