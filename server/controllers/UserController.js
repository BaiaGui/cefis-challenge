const sql = require('../db');
const { randomUUID } = require('node:crypto');

class UserController{

    //POST
    async createUser(userData){
        const userId = randomUUID();
        await sql`INSERT INTO userdata (id, name, type) VALUES (${userId}, ${userData.name}, ${userData.type})`;
    }

    //GET
    async getAllUsers(filter){
        let users;

        if(filter){
           users = await sql`SELECT * FROM userdata WHERE type ILIKE ${'%' + filter + '%'}`;
        }else{
            users = await sql`SELECT * FROM userdata`;
        }

        return users;
    }

    async getUserById(id){
        let user;
        user = await sql`SELECT * FROM userdata WHERE id = ${id}`;

        return user;
    }

    //PUT
    async updateUserById(id, newData){
        await sql`UPDATE userdata SET name=${newData.name}, type=${newData.type} WHERE id = ${id}`
    }


    //DELETE
    async deleteUserById(id){
        await sql`DELETE FROM userdata WHERE id = ${id}`;
    }

}

module.exports = new UserController;