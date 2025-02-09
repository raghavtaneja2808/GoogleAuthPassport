const passport=require("passport")
module.exports=(app)=>{
app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}));

app.get('/auth/google/callback',passport.authenticate('google'));
app.get('/api/current_user',(req,res)=>{
    console.log("page opend",req.user);
    res.send(req.user);
}
)
app.get("/check-session", (req, res) => {
    console.log("Session data:", req.session);
    res.send(req.session);
});

app.get("/api/logout",(req,res)=>{
    req.logout();
    res.send(req.user);
})

}