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
export const addCareer = (req, res, next) => {

  var career = {
    "id": req.body.career_id, 
    "name": req.body.career_name,
    "salary": req.body.career_salary,
    "description": req.body.career_description,
    "videolink": req.body.career_videolink,
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
        next()
      }
    
  })

};

export const prepareCareerId = (req, res) => {

  cluster.findOneAndUpdate({id: req.params.clusterid}, {$set: {careersLastId: req.body.career_id}}, 
    { safe: true, upsert: true } ,
    function(err, success) {
      if (err) {
        return res.send(err)
      }
      else {
        var redir = {
          redirect: "/Admin-Dashboard"
        }
          console.log(success)
          return res.json(redir)
      }
    })
}


export const deleteCareer = (req, res) => {
  
  cluster.findOneAndUpdate({id: req.params.clusterid},{ $pull: { careers: { id: req.body.career_id } }}, 
    { safe: true, upsert: true } ,
    function(err, success) {
      if (err) {
        return res.send(err)
      }
      else {
        var redir = {
          redirect: "/Admin-Dashboard"
        }
        return res.json(redir)
      }
    
  })
};




