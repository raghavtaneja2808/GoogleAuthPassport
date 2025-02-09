const express = require('express');
const keys=require('./config/keys.js');
const app = express();
const cookieSession=require('cookie-session');
const mongoose=require("mongoose");
const passport = require('passport');
require("./models/user.js");
require("./services/passport.js");
app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey],

}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/authRoutes.js')(app);
mongoose.connect(keys.mongoURI).then(()=>console.log("connected"));
const PORT=process.env.PORT||5000
app.listen(PORT, () => {
    console.log('Website running at http://localhost:5000');
});
