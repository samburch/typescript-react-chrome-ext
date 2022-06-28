const passport = require("passport");
const clientKeys = require("./config");
const GoogleStrategy = require('passport-google-oauth20');

// Google strategy
passport.use(new GoogleStrategy({
    clientID: clientKeys.GOOGLE.clientID,
    clientSecret: clientKeys.GOOGLE.clientSecret,
    callbackURL: '/auth/google/callback'
},
    (accessToken, refreshToken, profile, cb) => {
        // console.log(JSON.stringify(profile));
        // user = { ...profile };
        return cb(null, profile);
    }
))

passport.serializeUser((user, cb) => {
    cb(null, user)
})

passport.deserializeUser((user, cb) => {
    cb(null, user)
})