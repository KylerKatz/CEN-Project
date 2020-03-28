import cluster from '../models/ClusterModel.js';


// Will return all clusters
export const list = (req, res) => {
	cluster.find({}, function(err, clusters){
        if(err){
          console.log(err);
        } else{
            res.json(clusters);
        }
    })
};

// Will instert a new cluster in the Database
export const addCluster = (req, res) => {

  const newCluster = new cluster({
    name: req.body.cluster_name,
    id: req.body.cluster_id,
    jobnum: req.body.cluster_jobnum,
    careersLastId: req.body.cluster_careersLastId,
  })

  console.log(newCluster)

  newCluster.save((err, data) => {
    if (err){
      console.log(err)
    }
    else{
      var redir = {
        redirect: "/Admin-Dashboard"
      }
      console.log(data)
      return res.json(redir)
    }
  })
};


// Will delete a cluster
export const deleteCluster = (req, res) => {

  cluster.deleteOne({id: req.params.clusterid}, 
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
};

// Will update clusters ID after deletion
export const updateClusterId = (req, res) => {
  
  const obc = {
    cluster_in_db: req.params.clusterid,
    cluster_new_id: req.body.new_id
  }

  console.log(obc)

  cluster.findOneAndUpdate({id: req.params.clusterid}, {$set: {id: req.body.new_id}}, 
    { safe: true, upsert: true } ,
    function(err, success) {
      if (err) {
        return res.send(err)
      }
      else {
          return res.send(success)
      }
    })

}


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

// Prepares cluster for addition of Career in future
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
};


// Deletes a career from a given cluster
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

// Updates all the fields of a career within a cluster
export const updateCareer = (req, res) => {

  console.log(req.body)

  cluster.findOneAndUpdate({id: req.params.clusterid, 'careers.id': req.body.career_id},
    {$set: {"careers.$.name": req.body.career_name, "careers.$.description": req.body.career_description,
    "careers.$.salary": req.body.career_salary, "careers.$.videolink": req.body.career_videolink, 
    "careers.$.celebrities": req.body.career_celebrities, "careers.$.classes": req.body.career_classes} },
    { new: true }, 
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
};







