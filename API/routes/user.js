const express = require('express');
const router  = express.Router();
const User = require('../models/user');

router.get('/', (req,res) =>{
    res.send('from API / user route');
});

router.post('/newUser', (req,res)=>{
    user = new User();
    user.username = req.body.username.toLowerCase();
    user.password = req.body.password;
    user.save((err,newUser)=>{
        if (err) {
            res.status(401).send('DB error'+err);
        } else {
            res.status(200).send(newUser);
        }
    })
});

router.post('/authUser', (req,res)=>{
    console.log('authuser : ',req.body);
    if(req.body.username == '' || req.body.username == undefined){
        res.status(401).send('Error : Please enter a User Name');
    } else if(req.body.password == '' || req.body.password == undefined){
        res.status(401).send('Error : Please enter a Password');
    } else {
        User.findOne({username:req.body.username})
            .select('_id username password')
            .exec((err, foundUser)=>{
                if(err){
                    res.status(401).send('DB error : '+err);
                } else if (!foundUser){
                    res.status(401).send('Error : User Name or Password Incorrect.');
                } else {
                    var valid = foundUser.comparePassword(req.body.password);
                    if (!valid){
                        res.status(401).send('Error : User Name or Password Incorrect.');                
                    } else {
                        res.status(200).json({_id:foundUser._id});
                    } 
                }
            })
    }
})

module.exports = router;