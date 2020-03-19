import * as ur from '../controllers/usersController.js';
import express from 'express';
const userRouter = express.Router();



//var userController 
userRouter.post("/Signup", ur.post);

export default userRouter; 