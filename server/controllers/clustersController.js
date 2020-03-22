import cluster from '../models/ClusterModel.js';


// Will return all career clusters
const list = (req, res) => {
	cluster.find({}, function(err, clusters){
        if(err){
          console.log(err);
        } else{
            res.json(clusters);
        }
    })
};

export default list;