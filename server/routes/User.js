const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');



router.get('/', async(req, res)=> {
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

router.get('/:id', async(req, res)=>{
    let id = req.params.id;
    let user;
    try {
        user = await UserController.getUserById(id);
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
    res.status(201).json(user);
})

router.post('/', async(req, res)=> {
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

router.put('/:id', async (req, res)=> {
    const id = req.params.id;
    console.log(id);
    try {
        await UserController.updateUserById(id, req.body);
    } catch (e) {
        res.status(500).json({});
        console.log(e);
    }
    res.status(200).json({})
})

router.delete('/:id', async(req, res)=> {
    const id = req.params.id;
    try {
        await UserController.deleteUserById(id);
    } catch (error) {
        
    }
    res.status(200).json({});
})

module.exports = router;