const express = require('express');
const router = express.Router();
const AnswerController = require('../controllers/AnswerController');

router.get("/", (req, res)=> {
    res.send("Answer");
})

router.post("/", (req, res)=> {
    res.send("Oie");
})

router.put("/", (req, res)=> {
    res.send("Oie");
})

router.delete("/", (req, res)=> {
    res.send("Oie");
})

module.exports = router;