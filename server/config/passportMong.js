import passport from 'passport';
import Strategy from 'passport-local';
import User from '../models/UserSchema.js';

passport.use(new Strategy((email,password, done) =>{
    User.findOne({email: email}, (err, user) => {
            if(err) {
                console.log("error in findOne");
                return done(err)};
            if(user.password != password){
                console.log("wrong password");
                return done(false); 
            };

            console.log("auth fine");
            return done(null, user);
        }
    );
})
);

passport.serializeUser((user, done) => done (null,user.id));
passport.deserializeUser((id, done) => {
//find by email
    console.log("trying to find by id");
    
    User.findById(id, (err, user) => {
        if(err){return done(err)};
        done(null, user)

    });

});


export default passport;