const {randomUUID} = require('node:crypto');
const sql = require('../db');

class AnswerController{
    //POST
    async createAnswer(answerData){
        const id = randomUUID();
        await sql`INSERT INTO answer (id, question_id, text) VALUES (${id}, ${answerData.questionId}, ${answerData.text})`;
    }
    //GET
    async getAnswerByQuestionId(questionId){
        let answer;
        answer = await sql`SELECT * FROM answer WHERE question_id = ${questionId}`;
        return answer;
    }
}

module.exports = new AnswerController;