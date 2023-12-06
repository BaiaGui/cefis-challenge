const sql = require('../db');
const { randomUUID } = require('crypto');

class UserController{

    //POST
    async createUser(userData){
        const userId = randomUUID();
        await sql`INSERT INTO userdata (id, name, type) VALUES (${userId}, ${userData.name}, ${userData.type})`
        

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

    // getAllTeachers(){

    // }

    // getAllStudents(){

    // }

    getTeacherById(id){

    }

    getStudentById(id){

    }

    //PUT
    updateUserById(id){

    }


    //DELETE
    deleteUserById(id){

    }

}

module.exports = new UserController;