import Strategy from 'passport-local';
import User from '../models/UserSchema.js';
import bcrypt from 'bcrypt';
export default function(passport){

passport.serializeUser((user, done) => done (null,user.id));
passport.deserializeUser((id, done) => {
    
    User.findById(id, (err, user) => {
        if(err){return done(err)};
        done(null, user)
    });

});

passport.use('login', new Strategy({usernameField: 'email', passwordField: 'password',  passReqToCallback:true}, 

    (req, email,password, done) =>{
        console.log('searching for user');
        

        User.findOne({email:email}, (err, user) => {
            if(err) {return done(err);}

            
            if (!user) {
                console.log('user not found');
                return done(err);
            }
            console.log('user found');
            console.log('passwords: ', password, user.password);
            
            /*
            bcrypt.compareSync(password, user.password, function(err2, result) {
                console.log('bcrypt works: ', result);
                if (result == false){
                    console.log('password doesn\'t match');
                    user=false;
                    return done(null, false); 
                }
                else{
                    console.log('password does match');  
                    return done(null, user);
				}
            });
            //bcrypt.
            */
            if(bcrypt.compareSync(password, user.password)){
                console.log('passwords match: ', user);
                req.session.user = user;
            }
            else{
                console.log('password doesn\'t match');
                    user=false;
                    return done(null, false); 
			}
            

        });
       
    }));

};



