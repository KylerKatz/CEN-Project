import express from 'express';
const quizRouter = express.Router();

quizRouter.get("/", quizController.list);

export default quizRouter; 