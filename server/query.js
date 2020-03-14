import * as fs from 'fs';
import mongoose from 'mongoose';
import cluster from './models/ClusterModel.js';
import config from './config/config.js';

let db, eclus;
db= mongoose.connect(config.db.uri, {useNewUrlParser: true});
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
console.log(`established connection to db at uri: ${config.db.uri}!`);

const retrieveAllClusters = () => {
 
    cluster.find({}, function (err, clusters) {
		if(err) throw err;
		eclus=clusters;
		var iloveiterators=clusters.length;
		for(var i = 0; i < iloveiterators; i++){
			console.log(clusters[i]);
			
		};
		
	});
};

retrieveAllClusters();

export default eclus;