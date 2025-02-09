const express = require('express');
const app = express();
require("./services/passport.js");
require('./config/authRoutes.js')(app);
const PORT=process.env.PORT||5000
app.listen(PORT, () => {
    console.log('Website running at http://localhost:5000');
});
