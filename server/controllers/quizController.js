import quiz from '../models/QuizModel.js';


//Auxilary quiz CRED DUMP, DO NOT RUN
export const list = (req, res) => {
	quiz.find({}, function(err, questions){
        if(err){
          console.log(err);
        } else{
            res.json(questions);
        }
    })
};