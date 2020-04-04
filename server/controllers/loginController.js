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

      console.log("passport req.user:");
      console.log(req.user);


	if(req.user){
        console.log('req.user exists');
        userc.name=req.user.username;
        userc.email=req.user.email;
        user.findOne({email: userc.email} ,
            function(err, success) {
              if (err) {
                return res.send(err)
              }
              else if(success){
                
                console.log('found user');
                console.log(success)
              }
              else{
              console.log('DIDn\'t find user');
                var error = {
                  username: null,
                  email: null,
                  logged:false
                }

                
                //add alert box here
                
	          }
    
          })
        console.log('sending userc');
        res.send(userc);

	}
    else{
        console.log('sending false');
        res.send(false);
	}
};

export const isLogged2 = (req, res) => {

      console.log("passport req.user:");
      console.log(req.user);


	if(req.user){
        console.log('req.user exists, sending it');
        res.send(req.user);

	}
    else{
        console.log('sending false');
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