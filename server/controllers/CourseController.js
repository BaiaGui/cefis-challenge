const sql = require('../db');
const { randomUUID } = require('node:crypto');

class CourseController{
    //POST
    async createCourse(courseData){
        const id = randomUUID();
        console.log(`INSERT INTO course (id, title, duration, teacher_id) VALUES (${id}, ${courseData.title}, ${courseData.duration}, ${courseData.teacherId}) `)
        await sql`INSERT INTO course (id, title, duration, teacher_id) VALUES (${id}, ${courseData.title}, ${courseData.duration}, ${courseData.teacherId}) `;
    }

    //GET
    async getAllCourses(){
        let courses;
        courses = await sql`SELECT course.id, course.title, course.duration, course.teacher_id, userdata.name teacher_name 
                            FROM course
                            JOIN userdata ON course.teacher_id = userdata.id`;
        return courses;
    }

    async getCourseById(id){
        let courses;
        courses = await sql`SELECT course.id, course.title, course.duration, course.teacher_id, userdata.name teacher_name 
                            FROM course
                            JOIN userdata ON course.teacher_id = userdata.id 
                            WHERE course.id = ${id}`;
        return courses;
    }

    //PUT
    async updateCourseById(id, newData){
        await sql`UPDATE course SET title = ${newData.title}, duration = ${newData.duration}, teacher_id = ${newData.teacherId} WHERE id = ${id}`;
    }

    //DELETE
    async deleteCourseById(id){
        if(id.length == 36)
            await sql`DELETE FROM course WHERE id = ${id}`
        else
            throw new Error("Invalid ID");
    }
}

module.exports = new CourseController;