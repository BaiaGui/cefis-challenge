const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');



router.get('/', async(req, res)=> {
    try {
        let users;
        const type = req.query.type;
        users = await UserController.getAllUsers(type);
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({message: `Error getting users`});
        console.log(error);
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        let user;
        user = await UserController.getUserById(id);
        res.status(201).json(user);
    
    } catch (error) {
        res.status(500).json({message: `Error getting user`});
        console.log(error);
    }
})

router.post('/', async(req, res)=> {
    try {
        const {name, type} = req.body;
        await UserController.createUser({
            name,
            type,
        });
        res.status(201).json({message: 'User registered successfully'});

    } catch (error) {
        res.status(500).json({message: 'User registration failed'});
        console.log(error);
    }

   
})

router.put('/:id', async (req, res)=> {
    try {
        const id = req.params.id;
        const {name, type} = req.body
        await UserController.updateUserById(id,{
                name, 
                type,
        });
        res.status(200).json({message: 'User updated successfully'})

    } catch (error) {
        res.status(500).json({message: 'User update failed'});
        console.log(error);
    }
})

router.delete('/:id', async(req, res)=> {
    const id = req.params.id;
    try {
        await UserController.deleteUserById(id);
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'User delete failed'});
        console.log(error);
    }
})

module.exports = router;