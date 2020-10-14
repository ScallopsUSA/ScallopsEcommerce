const passport = require("passport");
const { User } = require("../models/user.model");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
require('dotenv').config();

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
            callbackURL: "http://localhost:8000/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done) {
        const userData = {
            email: profile.emails[0].value,
            name: profile.displayName,
            token: accessToken
        };
        if( !User.findOne( {googleId: profile.id }, (err, user) => done(err, user) ) ) {
            User.create({
                firstName: profile.firstName,
                lastName: profile.lastName,
                email: profile.email
            }).then( user => console.log( {user} ) )
            .catch( err => console.log( {err} ) );
        }
        done(null, userData);
        }
    )
);