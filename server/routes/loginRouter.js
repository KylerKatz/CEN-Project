import express from 'express';
import * as loginController from '../controllers/loginController.js';
import passport from 'passport';

const loginRouter = express.Router();

//debug
//loginRouter.get('/', loginController.list);

//loginRouter.post('/', loginController.loginreq, loginController.loginsuc);

//authenticated useds 
loginRouter.post('/', passport.authenticate('login',{
    failureRedirect:'/Login', failureFlash: true
}), 
(req, res) =>{// this is the same code as loginsuc
    //console.log(typeof(userc.isAdmin));
    console.log(req.flash('error'));
    console.log("made redirection of post");
    if(req.user.isAdmin===true){
        res.redirect('/Admin-Dashboard');  
    }
    else{
        res.redirect('/Explore');
    }
});

/*
loginRouter.post('/', function(req, res, next) {
    console.log(req.url);
    passport.authenticate('local', function(err, user, info) {
        console.log("authenticate");
        console.log(err);
        console.log(req.user.email);
        console.log(info);
    })(req, res, next);
});
*/
export default loginRouter;