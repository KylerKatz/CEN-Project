import express from 'express';
import * as loginController from '../controllers/loginController.js';
import passport from 'passport';

const loginRouter = express.Router();

//debug
loginRouter.get('/', loginController.isLogged);

//loginRouter.get('/', loginController.isLogged2);

//loginRouter.post('/', loginController.loginreq, loginController.loginsuc);

//authenticated useds 
loginRouter.post('/', passport.authenticate('login',{
    failureRedirect:'/LoginFailed'
}), 
(req, res) =>{
    console.log("made redirection of post");
    if(req.user.isAdmin===true){
        res.redirect('/Admin-Dashboard');  
    }
    else{
        res.redirect('/Student-Dashboard');
    }
});
export default loginRouter;