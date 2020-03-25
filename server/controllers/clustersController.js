import cluster from '../models/ClusterModel.js';

// Will return all career clusters
export const list = (req, res) => {
	cluster.find({}, function(err, clusters){
        if(err){
          console.log(err);
        } else{
            res.json(clusters);
        }
    })
};

// Will insert a new career in given cluster
export const addCareer = (req, res) => {

  var career = {
    "id": req.body.career_id, 
    "name": req.body.career_name,
    "salary": req.body.career_salary,
    "description": req.body.career_description,
    "videolink": "https://www.youtube.com/watch?v=g7WjrvG1GMk",
    "celebrities": req.body.career_celebrities,
    "classes": req.body.career_classes
  };

  console.log(career)

  cluster.findOneAndUpdate({id: req.params.clusterid},{ $push: { careers: career  } }, { safe: true, upsert: true } ,
    function(err, success) {
      if (err) {
        return res.send(err)
      }
      else {
        console.log(success)
        return res.json(success)
      }
    
  })




};

