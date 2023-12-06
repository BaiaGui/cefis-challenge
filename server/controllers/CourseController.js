const sql = require('../db');
const { randomUUID } = require('node:crypto');

class CourseController{
    //POST
    async createCourse(courseData){
        const id = randomUUID();
        await sql`INSERT INTO course (id, title, duration, teacher_id) VALUES (${id}, ${courseData.title}, ${courseData.duration}, ${courseData.teacherId}) `;
    }

    //GET
    async getAllCourses(){
        let courses;
        courses = await sql`SELECT * FROM course`;
        return courses;
    }

    async getCourseById(id){
        let courses;
        courses = await sql`SELECT * FROM course WHERE id = ${id}`;
        return courses;
    }

    //PUT
    async updateCourseById(id, newData){
        await sql`UPDATE course SET title = ${newData.title}, duration = ${newData.duration}, teacher_id = ${newData.teacherId} WHERE id = ${id}`;
    }

    //DELETE
    async deleteCourseById(id){
        await sql`DELETE FROM course WHERE id = ${id}`
    }
}

module.exports = new CourseController;