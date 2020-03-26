import config from './config/config.js';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import path from 'path';
import clustersRouter from './routes/clustersRouter.js';
import userRouter from './routes/userRouter.js';
//const express = require('./config/express.js')

// Use env port or default
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(morgan('dev'));

//body parsing middleware
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);



app.use(bodyParser.json());

app.use('/', express.static('./client/build'));

app.use('/api/clusters/',  clustersRouter);
<<<<<<< HEAD
=======
 
app.use('/api/Signup/', userRouter);




>>>>>>> 1d2d979f34d2bfcc887ec4a0726ffd162416f5aa

mongoose
	.connect(config.db.uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => {
		console.log(`Successfully connected to mongoose database.`);
	});

//const app = express.init()
//app.listen(port, () => console.log(`Server now running on port ${port}!`));
app.get('*', (req, res) => {
	console.log("path: ");
	console.log(path.join(path.resolve(), './client/build/index.html'));
	res.sendFile(path.join(path.resolve(), './client/build/index.html'));
});

app.listen(port, () => console.log(`App now listening on port ${port}`));