const mongoose = require('mongoose');


mongoose.connect(
    "mongodb://localhost:27017/mongoose",
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("Mongodb connected")
        else console.log("connected err :" + err)
    }
)