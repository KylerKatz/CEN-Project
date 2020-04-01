import express from 'express';
import * as loginController from '../controllers/loginController.js';

const loginRouter = express.Router();

//debug
//loginRouter.get('/', loginController.list);

loginRouter.post('/', loginController.loginreq, loginController.loginsuc);


export default loginRouter;