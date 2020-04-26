import express from 'express';
import * as quizController from '../controllers/quizController.js'
const quizRouter = express.Router();

quizRouter.get("/", quizController.list);

export default quizRouter; 