import Strategy from 'passport-local';
import User from '../models/UserSchema.js';

export default function(passport){

passport.serializeUser((user, done) => done (null,user.id));
passport.deserializeUser((id, done) => {
    
    User.findById(id, (err, user) => {
        if(err){return done(err)};
        done(null, user)
    });

});

/*
passport.use('signup', new Strategy({usernameField: 'email', passwordField: 'password',  passReqToCallback:true}, (req, email, password, done) =>{
    User.findOne({email: email}, (err, user) =>{
        if(err)

    });



}));
*/

passport.use('login', new Strategy({usernameField: 'email', passwordField: 'password',  passReqToCallback:true}, 

    (req, email,password, done) =>{

        User.findOne({email:email, password: password}, (err, user) => {
            if(err) {return done(err);}
            

            //maybe change this?
           /* if(user.password != password){
                message: 'wrong password'
                return done(null,false); 
            };*/
    
            if (!user) {
                return done(null, false, req.flash('loginMessage','Incorrect username.' ));
              }
    
            return done(null, user);


        });
       
    }));

};