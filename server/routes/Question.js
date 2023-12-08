const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/QuestionController');

router.get("/course/:courseId", async(req, res)=> {
    try {
        const courseId = req.params.courseId;
        let questions;
        questions = await QuestionController.getQuestionsByCourseId(courseId);
        res.status(200).json(questions);

    } catch (error) {
        res.status(500).json({message:`Error getting questions`});
        console.log(error);
    }
})

router.get("/:id", async(req, res)=> {
    try {
        const id = req.params.id;
        let question;
        question = await QuestionController.getQuestionById(id);
        res.status(200).json(question);

    } catch (error) {
        res.status(500).json({message:`Error getting questions`});
        console.log(error);
    }
})

router.get("/teacher/:teacherId", async(req, res)=> {
    try {
        const teacherId = req.params.teacherId;
        let questions;
        questions = await QuestionController.getQuestionsByTeacherId(teacherId);
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({message:`Error getting questions`});
        console.log(error);
    }
})

router.post("/", async(req, res)=> {
        try {
            const {courseId, studentId, text} = req.body;
            await QuestionController.createQuestion({
                courseId,
                studentId,
                text,
            })
            res.status(200).json({message:`Question registered successfully`});
        } catch (error) {
            res.status(500).json({message:`Question registration failed - ${error}`});
            console.log(error);
        }
})


module.exports = router;