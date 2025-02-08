const express = require('express');
const app = express();
const path = require('path');
app.get("/rndex",(req,res)=>{res.sendFile(path.join(__dirname,"public","rndex.html"))})
// app.get("/",(req,res)=>{res.send({hi:"there"})});

app.use(express.static(path.join(__dirname, 'public')));
const PORT=process.env.PORT||5000
app.listen(PORT, () => {
    console.log('Website running at http://localhost:3000');
});
