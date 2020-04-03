import * as userController from '../controllers/usersController.js';
import express from 'express';
const userRouter = express.Router();

//var userController 
userRouter.post("/", userController.create, userController.redir);
/*

export const redir = function(req, res){
    console.log("Redirect: ", req.body.isAdmin);
    console.log(req.body);
    var t=req.body.isAdmin;
    //User.find({email})

    if(t==='false'){
         res.redirect('/Explore');
         
	}
    else{
         res.redirect('/Admin-Dashboard');
         
	}

}

*/
export default userRouter; 