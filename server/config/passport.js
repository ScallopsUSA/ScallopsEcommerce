const passport = require("passport");
const { User } = require("../models/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config();

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    // should findUserById in mongoDB here
    // User.findByID( {id: user.id}, (err, user) => done(err, user) )
    done(null, user);
});
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
            callbackURL: `http://localhost:8000/auth/google/callback`
        },
        function(accessToken, refreshToken, profile, done) {
            const userData = {
                email: profile.emails[0].value,
                name: profile.displayName,
                token: accessToken
            };
            // if( User.findOne( {googleId: profile.id }, (err, user) => done(err, user) ) == null ) {
            //     User.create({
            //         firstName: profile.firstName,
            //         lastName: profile.lastName,
            //         email: profile.email
            //     }).then( user => done( null, user ) )
            //     .catch( err => console.log( {err} ) );
            // } else {
            //     return done(null, userData);
            // }
            done(null, userData);
        }
    )
);