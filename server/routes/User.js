const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');



router.get("/", async(req, res)=> {
    let users;
    let type = req.query.type;
    try {
        users = await UserController.getAllUsers(type);
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }

    res.status(200).json(users);
})

router.post("/", async(req, res)=> {
    try {
        const {name, type} = req.body;
        await UserController.createUser({
            name,
            type,
        });
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
    res.status(201).json({});
   
})

router.put("/:id", (req, res)=> {
    res.send("Oie");
})

router.delete("/", (req, res)=> {
    res.send("Oie");
})

module.exports = router;