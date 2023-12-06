const sql = require('../db');
const { randomUUID } = require('crypto');

class UserController{

    //POST
    async createUser(userData){
        const userId = randomUUID();
        await sql`INSERT INTO userdata (id, name, type) VALUES (${userId}, ${userData.name}, ${userData.type})`
        

    }

    //GET
    async getAllUsers(search){
        let users;

        if(search){
           users = await sql`SELECT * FROM userdata WHERE type ilike "${'%' + search + '%'    }"`; 
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