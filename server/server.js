import config from './config/config.js';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import path from 'path';
import clustersRouter from './routes/clustersRouter.js';
import userRouter from './routes/userRouter.js';
import loginRouter from './routes/loginRouter.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passportMong from './config/passportMong.js';
//import {findUser} from './controllers/loginController.js';
//import {findByEmail} from './controllers/loginController.js'

// Use env port or default
const port = process.env.PORT || 5000;

const app = express();

mongoose
	.connect(config.db.uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => {
		console.log(`Successfully connected to mongoose database.`);
	});

app.use(cors());

app.use(morgan('dev'));

//body parsing middleware


app.use(cookieParser());
app.use(session({secret: 'shh', resave:false, saveUninitialized:false}));
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());


app.use(passportMong.initialize());
app.use(passportMong.session()); 

app.use('/', express.static('./client/build'));

app.use('/api/clusters/',  clustersRouter);

app.use('/api/Signup/', userRouter);

app.use('/api/Login/', loginRouter)
//logout
//app.get('/logout', (req, res) => { req.logout(); res.redirect('/login')})




//const app = express.init()
//app.listen(port, () => console.log(`Server now running on port ${port}!`));
app.get('*', (req, res) => {
	console.log("path: ");
	console.log(path.join(path.resolve(), './client/build/index.html'));
	res.sendFile(path.join(path.resolve(), './client/build/index.html'));
});

app.listen(port, () => console.log(`App now listening on port ${port}`));
