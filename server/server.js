import config from './config/config.js';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import path from 'path';
import clustersRouter from './routes/clustersRouter.js';
import userRouter from './routes/userRouter.js';
import quizRouter from './routes/quizRouter.js';
import loginRouter from './routes/loginRouter.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';
import func from './config/passportMong.js';
// Use env port or default
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

func(passport);

mongoose
	.connect(config.db.uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => {
		console.log(`Successfully connected to mongoose database.`);
	});

//body parsing middleware


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use(cookieParser());
  
app.use(morgan('dev'));
//change secret for security reasons 
app.use(session({secret: 'shh', resave:false, saveUninitialized:false, }));

app.use(passport.initialize());
app.use(passport.session()); 

app.use((req, res, next) => {
  app.locals.isAuthenticated = req.isAuthenticated(); 
  next();
}); 

app.use(flash());

app.use('/', express.static('./client/build'));

app.use('/api/clusters/',  clustersRouter);

app.use('/api/Signup/', userRouter);

app.use('/api/Login/', loginRouter);

app.use('/api/Quiz/', quizRouter);


app.get('/Logout/', (req, res, next) => {
  req.logout()
  req.session.destroy(() => {
    //clear cookies
      res.redirect('/Login/');

  });
}); 

//check if user is admin for rights to page 
app.get('/Admin-Dashboard/', (req, res) =>{
    if(!req.user.isAdmin){
      res.redirect('/Explore'); 
    }

}); 

app.get('*', (req, res) => {
	console.log("path: ");
	console.log(path.join(path.resolve(), './client/build/index.html'));
	res.sendFile(path.join(path.resolve(), './client/build/index.html'));
});

app.listen(port, () => console.log(`App now listening on port ${port}`));


