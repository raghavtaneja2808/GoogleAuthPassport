const passport=require("passport");
const mongoose=require("mongoose");
const User=mongoose.model("users");
const GoogleStrategy=require('passport-google-oauth20').Strategy
const keys=require("../config/keys.js");
passport.serializeUser((user,done)=>{
    console.log("Serializing User: ",user)
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    console.log("Desrializing User",id)
    User.findById(id).then(user=>{done(null,user)})
})
passport.use(new GoogleStrategy({
    clientID:keys.googleClientId,
    clientSecret:keys.googleClientSecret,
    callbackURL:keys.callbackURL||'/auth/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    User.findOne({googleID:profile.id}).then((user)=>{if(!user){  new User({googleID:profile.id}).save().then(user=>done(null,user));}
    else{done(null,user)};console.log(user);

})
}))
