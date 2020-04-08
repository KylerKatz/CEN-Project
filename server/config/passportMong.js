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

/*
passport.use('signup', new Strategy({usernameField: 'email', passwordField: 'password',  passReqToCallback:true}, (req, email, password, done) =>{
    User.findOne({email: email}, (err, user) =>{
        if(err)

    });



}));
*/

passport.use('login', new Strategy({usernameField: 'email', passwordField: 'password',  passReqToCallback:true}, 

    (req, email,password, done) =>{

        User.findOne({email:email}, (err, user) => {
            if(err) {return done(err);}

            bcrypt.compareSync(password, user.password, function(err, result) {
                if (result == false){
                    return done(null,false,  req.flash('loginMessage','Incorrect password.' )); 
                }
            });
            //maybe change this?
            /*if(user.password != password){
                message: 'wrong password'
               
            };*/
    
            if (!user) {
                return done(null, false,{message : 'incorrect credentials'});
              }
            req.session.user = user;
            return done(null, user);

        });
       
    }));

};



