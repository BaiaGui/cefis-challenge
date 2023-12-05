const express = require('express');
const router = express.Router();

router.get("/", (req, res)=> {
    res.send("Question");
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