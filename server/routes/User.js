const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');



router.get("/", (req, res)=> {
    res.send("User");
})

router.post("/", async(req, res)=> {
    try {
        const {name, type} = req.body;
        //console.log(`name: ${name}, type:${type}`);
        console.log(req.body);
        await UserController.createUser({
            name,
            type,
        });
        res.send("Oie"); 
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
   
})

router.put("/:id", (req, res)=> {
    res.send("Oie");
})

router.delete("/", (req, res)=> {
    res.send("Oie");
})

module.exports = router;