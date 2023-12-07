const express = require('express');
const router = express.Router();
const AnswerController = require('../controllers/AnswerController');

router.get("/:questionId", async(req, res)=> {
    try {
        const questionId = req.params.questionId;
        let answer;
        answer = await AnswerController.getAnswerByQuestionId(questionId);
        res.status(200).json(answer);

    } catch (error) {
        res.status(500).json({message:`Error getting answer`});
        console.log(error);
    }
})

router.post("/", async(req, res)=> {
    try {
        const {questionId, text} = req.body;
        await AnswerController.createAnswer({
            questionId,
            text
        });
        res.status(200).json({message:`Answer registered successfully`});

    } catch (error) {
        res.status(500).json({message:`Answer registration failed`});
        console.log(error);
    }
})


module.exports = router;