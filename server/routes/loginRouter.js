import express from 'express';
import * as loginController from '../controllers/loginController.js';
import passport from 'passport';

const loginRouter = express.Router();

//debug
//loginRouter.get('/', loginController.list);

//loginRouter.post('/', loginController.loginreq, loginController.loginsuc);

//authenticated useds 
loginRouter.post('/', passport.authenticate('local',{
    
    failureRedirect:'/Login'
    

})), (req, res) => {// this is the same code as loginsuc
    //console.log(typeof(userc.isAdmin));
    console.log("made redirection of post");
    if(req.user.isAdmin===true){
        res.redirect('/Admin-Dashboard');  
    }
    else{
        res.redirect('/Explore');
    }

};


export default loginRouter;