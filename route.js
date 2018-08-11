var express = require('express');
const Dharma = require('@dharmaprotocol/dharma.js');
//import Dharma from "@dharmaprotocol/dharma.js";
var router = express.Router();
const dharma = new Dharma("http://localhost:8545");
router.get('/',function(req,res){
    console.log(dharma);
    res.send('Hello world');
})
module.exports = router;
