const {randomUUID} = require('node:crypto');
const sql = require('../db');


class QuestionController{
    //POST

    async createQuestion(questionData){
        const id = randomUUID();
        await sql`INSERT INTO question (id, course_id, student_id, text) VALUES (${id}, ${questionData.courseId}, ${questionData.studentId}, ${questionData.text})`;
    }

    //GET
    async getQuestionsByCourseId(courseId){
        let question;
        question = await sql`SELECT * FROM question WHERE course_id = ${courseId}`;
        return question;
    }

    async getQuestionById(id){
        let question;
        question = await sql`SELECT q.id, q.text, c.title course_title, u.name student_name FROM question q
                             JOIN course c ON q.course_id = c.id
                             JOIN userdata u ON q.student_id = u.id
                             WHERE q.id = ${id}`;
        return question;
    }

    async getQuestionsByTeacherId(teacherId){
        let question;
        question = await sql`SELECT q.id, q.student_id, q.text, c.title courseTitle FROM question q 
                            JOIN course c ON q.course_id = c.id
                            JOIN userdata u ON c.teacher_id = u.id
                            WHERE c.teacher_id = ${teacherId}`;
        return question;
    }

}

module.exports = new QuestionController;