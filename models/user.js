const mongoose = require("mongoose");

const PersonModel = mongoose.model(

    "mongoose",

    {
        name : {
            type: String,
            require: true
        },
        age : {
            type: Number,
            require: true
        },
        favoriteFoods : {
            type: Array,
            require: true
        },
        date : {
            type: Date,
            default: Date.now
        }
    },

    "posts"
)


module.exports = { PersonModel };