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
        console.log(`SELECT * FROM question WHERE course_id = ${courseId}`);
        let question;
        question = await sql`SELECT * FROM question WHERE course_id = ${courseId}`;
        return question;
    }

    async getQuestionsByTeacherId(teacherId){
        let question;
        question = await sql`SELECT * FROM question q 
                            JOIN course c ON q.course_id = c.id
                            WHERE c.teacher_id = ${teacherId}`;
        return question;
    }

}

module.exports = new QuestionController;