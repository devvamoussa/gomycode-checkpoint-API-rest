const express = require("express");
const router = express.Router();
const { PersonModel } = require("../models/user");
const ObjectID = require('Mongoose').Types.ObjectId;


//methode get

router.get("/", (req, res) => {
    PersonModel.find((err, docs) => { 
        if(!err) {
            res.send(docs)
        }else{
            console.log(`Get error: ${err}`)
        }
    })
});

//methode post 
router.post('/', (req, res) => {
    const newPerson = new PersonModel({
        name: req.body.name,
        age: req.body.age,
        favoriteFoods: req.body.favoriteFoods,
        date: req.body.date
    });

    newPerson.save((err, docs) => {
        if(!err) {
            res.send(docs)
        }else{
            console.log(`Error create data new: ${err}`)
        }
    })
});

//methode Delect

router.delete('/:id', (req, res) =>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)
        PersonModel.findByIdAndRemove(
            req.params.id,
            (err, docs) => {
                if(!err) res.send(docs)
                else console.log("delete erro : " + err);
            }
            );
})

module.exports = router;