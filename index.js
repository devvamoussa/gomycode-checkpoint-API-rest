const express = require('express');
const app = express();
require('./models/dbconfig')
const personRouters = require("./routes/server");
const bodyParser = require("body-parser")


app.use(bodyParser.json())
app.use("/person", personRouters);


app.listen(3000, () => console.log('server start : 3000'));