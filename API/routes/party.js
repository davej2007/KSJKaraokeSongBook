const express = require('express');
const router  = express.Router();
const Party = require('../models/party');

router.get('/', (req,res) =>{
    res.send('from API / Party route');
});

router.post('/newParty', (req,res)=>{
    party = new Party();
    party.surname = req.body.surname.toLowerCase();
    party.title = req.body.title;
    party.date = req.body.date;
    party.type = req.body.type.toLowerCase();
    party.christmas = req.body.christmas;
    party.save((err,newParty)=>{
        if (err) {
            res.status(401).send('DB error'+err);
        } else {
            res.status(200).send(newParty);
        }
    })
});

router.post('/selectParty', (req,res)=>{
    if(req.body.surname == '' || req.body.surname == undefined){
        res.status(401).send('Error : Please enter a Surname');
    } else if(req.body.date == '' || req.body.date == undefined){
        res.status(401).send('Error : Please enter a Date');
    } else if(req.body.type == '' || req.body.type == undefined){
        res.status(401).send('Error : Please enter a Party Description');
    } else {
        Party.findOne({surname:req.body.surname.toLowerCase()})
            .select('_id surname title date type christmas')
            .exec((err, foundParty)=>{
                if(err){
                    res.status(401).send('DB error : '+err);
                } else if (!foundParty){
                    res.status(401).send('Error : Surname Not Found.');
                } else {
                    if(foundParty.date != req.body.date){
                        res.status(401).send('Error : Date Does not Match.');
                    } else if (foundParty.type != req.body.type) {
                        res.status(401).send('Error : Description Does not Match.');
                    } else {
                    res.status(200).json({_id:foundParty._id});
                    }
                }
            })
    }
})

router.get('/detailParty/:id', (req,res)=>{
    Party.findById(req.params.id).select('_id title christmas').exec(function (err, partyDetails) {
        if (err) {
            res.status(401).send('DB error'+err);
        } else {
            res.status(200).send(partyDetails);
        }
    });
});

module.exports = router;