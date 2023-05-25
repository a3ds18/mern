const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.json({msg:"get all workouts"});
});

router.get('/:id', function (req, res) {
    res.json({msg:"get single workout"});
});

router.post('/', function (req, res) {
    res.json({msg:"post workout"});
});

router.delete('/:id', function (req,res) {
    res.json({msg:"delete workout"});

});

router.patch('/:id', function (req,res) {
    res.json({msg:"update workout"});

});



module.exports = router;