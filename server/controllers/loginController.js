import user from '../models/UserSchema.js';


//Auxilary USER CRED DUMP, DO NOT RUN
export const list = (req, res) => {
	user.find({}, function(err, users){
        if(err){
          console.log(err);
        } else{
            res.json(users);
        }
    })
};

export const isLogged = (req, res) => {
    var userc = {
        "name": '', 
        "email": '', 
        "isAdmin": ''
      };
	if(req.user){
        userc.name=req.user.username;
        userc.email=req.user.email;
        user.findOne({email: req.user.email} ,
            function(err, success) {
              if (err) {
                return res.send(err)
              }
              else if(success){
                //userc.name=success.name;
                userc.isAdmin=success.isAdmin;
                //console.log(userc)
                //req.userc=userc;
                
              }
              else{
                res.status(418);
                res.redirect('Explore');
                userc=false;
                //add alert box here
                
	          }
    
          })
        res.send(userc);

	}
    else{
        res.send(false);
	}
};

//Login function - Credential retrieval
export const loginreq = (req, res, next) => {

  var userc = {
    "name": '', 
    "email": req.body.email, 
    "password": req.body.password, 
    "isAdmin": ''
  };

  //console.log(userc)

  user.findOne({email: req.body.email, password: req.body.password} ,
    function(err, success) {
      if (err) {
        return res.send(err)
      }
      else if(success){
        userc.name=success.name;
        userc.isAdmin=success.isAdmin;
        //console.log(userc)
        req.userc=userc;
        next()
      }
      else{
        res.status(418);
        res.redirect('back');
        //add alert box here
        
	  }
    
  })

};

//Login authentication - Assign token
export const loginsuc = (req, res) => {

  console.log("logging in");
  //add auth functionality here
  var redir;
  
        //console.log(req.userc);
        var userc=req.userc;
        //console.log(typeof(userc.isAdmin));
         if(userc.isAdmin===true){
            redir='/Admin-Dashboard';  
	     }
         else{
            redir='/Explore';
         }
        return res.redirect(redir)
        
      
    
  
  

}