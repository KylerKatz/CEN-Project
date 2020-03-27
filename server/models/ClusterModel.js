import mongoose from 'mongoose';

/* Create your schema for the data in the listings.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
const clusterSchema = new mongoose.Schema({
  
  name: {type: String, required: true},
  id: {type: mongoose.Number, required: true},
  jobnum: {type: String, required: true},
  careersLastId: {type: mongoose.Number, required: true},
  careers: [mongoose.Schema.Types.Mixed]
  //careers: { type:array, [job: { "id": {type: mongoose.Number, required: true}, "name": {type: String, required: true}, "salary": {type: mongoose.Number, required: true}}]}
  
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('cluster', clusterSchema);
