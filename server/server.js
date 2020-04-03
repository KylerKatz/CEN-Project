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
import passport from 'passport';
import Strategy from 'passport-local';
import flash from 'connect-flash';
import {findUser} from './controllers/loginController.js';
import {findByEmail} from './controllers/loginController.js';
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
app.use(session({secret: 'shh', resave:true, saveUninitialized:true}));

app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());
  


//logout
//app.get('/logout', (req, res) => { req.logout(); res.redirect('/login')})



  
  /*passport.use(new Strategy({ usernameField: email},(username, password, done) =>{

    findUser(username, (err, user) => {
        if(err) {
            console.log('error');
            return done(err)};
            
        if(user.password != password){
            console.log('wrong password');
            return done(null,false); 
        };

        if (!user) {
            console.log('no such email');
            return done(null, false);
          }

        return done(null, user);
    }
    );


  }));
*/
  

app.use('/', express.static('./client/build'));

app.use('/api/clusters/',  clustersRouter);

app.use('/api/Signup/', userRouter);

app.use('/api/Login/', loginRouter);

//const app = express.init()
//app.listen(port, () => console.log(`Server now running on port ${port}!`));
app.get('*', (req, res) => {
	console.log("path: ");
	console.log(path.join(path.resolve(), './client/build/index.html'));
	res.sendFile(path.join(path.resolve(), './client/build/index.html'));
});

app.listen(port, () => console.log(`App now listening on port ${port}`));
