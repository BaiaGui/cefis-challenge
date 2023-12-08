const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/CourseController');

router.get('/', async (req, res)=> {
    try {
        let courses;
        courses = await CourseController.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({message: 'Error getting courses'});
        console.log(error);
    }

})

router.get('/:id', async(req, res)=>{
    let course;
    try {
        const id = req.params.id;
        course = await CourseController.getCourseById(id);
        res.status(200).json(course);

    } catch (error) {
        res.status(500).json({message: 'Error getting course data'});
        console.log(error);
    }

})

router.post('/', async(req, res)=> {
    try {
        const {title, duration, teacherId} = req.body;
        console.log(req.body)
        await CourseController.createCourse({
            title,
            duration,
            teacherId,
        });
        res.status(200).json({message: 'Course registered successfully'});

    } catch (error) {
        res.status(500).json({message: 'Course creation failed'});
        console.log(error);
    }

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
        res.status(200).json({message: 'Course updated successfully'});
        
    } catch (error) {
        res.status(500).json({message: 'Course update failed'});
        console.log(error);
    }
})

router.delete('/:id', async(req, res)=> {
    try {
        const id = req.params.id;
        await CourseController.deleteCourseById(id);
        res.status(200).json({message: 'Course deleted successfully'});
        
    } catch (error) {
        res.status(500).json({message: `Course delete failed: ${error.message}`});
        console.log(error);
    }

})

module.exports = router;