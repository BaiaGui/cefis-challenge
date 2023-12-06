const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/CourseController');

router.get("/", (req, res)=> {
    res.send("Course");
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