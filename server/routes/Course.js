const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/CourseController');

router.get('/', async (req, res)=> {
    try {
        let courses;
        courses = await CourseController.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({});
        console.log(error);
    }

})

router.get('/:id', async(req, res)=>{
    let course;
    try {
        const id = req.params.id;
        course = await CourseController.getCourseById(id);
    } catch (error) {
        res.status(500).json({});
        console.log(error);
    }
    res.status(200).json(course);
})

router.post('/', async(req, res)=> {
    try {
        const {title, duration, teacherId} = req.body;
        await CourseController.createCourse({
            title,
            duration,
            teacherId,
        });
    } catch (error) {
        res.status(500).json({});
        console.log(error);
    }
    res.status(200).json({});
})

router.put('/:id', async(req, res)=> {
    try {
        const id = req.params.id;
        const {title, duration, teacherId} = req.body;
        await CourseController.updateCourseById(id, {
            title,
            duration,
            teacherId,
        })
    } catch (error) {
        res.status(500).json({});
        console.log(error);
    }
    res.status(200).json({});
})

router.delete('/:id', async(req, res)=> {
    try {
        const id = req.params.id;
        await CourseController.deleteCourseById(id);
        res.status(200).json({});
    } catch (error) {
        res.status(500).json({});
        console.log(error);
    }

})

module.exports = router;